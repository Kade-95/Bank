const MainManager = require('./MainManager');
const mainManager = new MainManager();

function AccountManager() {
    this.login = (req, res, data) => {
        if (data.userName == undefined || data.currentPassword == undefined) {
            mainManager.respond(req, res, { status: false, message: "Username or Password incorrect" });
        }
        else {
            mainManager.find(req, { collection: 'accounts', query: { userName: data.userName }, projection: { currentPassword: 1 } }).then(result => {
                if (!global.base.isnull(result)) {
                    bcrypt.compare(data.currentPassword, result.currentPassword).then(valid => {
                        if (valid) {
                            mainManager.respond(req, res, { status: true, message: 'Login Successful', payload: result._id });
                            global.sessions[req.sessionId].set({ user: ObjectId(result._id).toString(), active: true });
                        }
                        else {
                            mainManager.respond(req, res, { status: false, message: "Username or Password incorrect" });
                        }
                    });
                }
                else {
                    mainManager.respond(req, res, { status: false, message: "Username or Password incorrect" });
                }
            });
        }
    }

    this.create = (req, res, data) => {
        if (data.email == undefined || data.userName == undefined || data.currentPassword == undefined) {
            mainManager.respond(req, res, { status: false, message: "Username, email or Password not set" });
            return;
        }
        mainManager.newAccountID();
        bcrypt.hash(data.currentPassword, 10).then(hash => {
            data.currentPassword = hash;
            mainManager.newAccountID().then(accountNo => {
                data.accountNo = accountNo;
                mainManager.ifNotExist(req, { collection: 'accounts', query: data, check: [{ userName: data.userName }, { email: data.email }], action: 'insert', getInserted: true }).then(result => {
                    if (!global.base.isset(result.found)) {
                        mainManager.respond(req, res, { status: true, message: 'User created successfully', payload: result[0]._id });
                        mainManager.makeHistory(req, global.base.isset(result[0]), { action: 'User Creation', data, collection: 'accounts', item: result[0]._id.toString() });
                        if (data.userType == 'Admin') {
                            mainManager.notify(req, { title: 'User type Change', note: 'Welcome to the BANK', users: [result[0]._id.toString()] });

                            mainManager.notifyAdmin(req, { title: 'New user registered', note: 'A new user has been added to the system.', link: `users.html?page=showUser&id=${result[0]._id.toString()}` });
                        }
                    }
                    else {
                        mainManager.respond(req, res, { status: false, message: `Found users with the same '${result.found.join(',')}'` });
                    }
                });
            });
        });
    }

    this.delete = (req, res, data) => {
        if (data.user == undefined) data.user = global.sessions[id].user;
        data.by = global.sessions[id].user;

        mainManager.recycle(req, { collection: 'accounts', query: { _id: ObjectId(data.user) } }).then(result => {
            let status = result == 1;
            let message = (status) ? "Your account has been deleted" : "An error occured, account not deleted"
            mainManager.respond(req, res, { status, message });
            mainManager.makeHistory(req, result == 1, { action: 'Delete User', data, collection: 'accounts', item: data.user });

            if (result == 1) {
                mainManager.notifyAdmin({ title: 'Account Removal', note: 'A user account was just deleted by the owner.', link: `users.html?page=showUser&id=${data.user}` });
            }
        });
    }

    this.isUserActive = (req, res, data) => {
        let active = false;
        for (let id in global.sessions) {
            if (global.sessions[id].user == data.user) {
                active = global.sessions[id].active;
                if (active) break;
            }
        }
        mainManager.respond(req, res, { status: active, message: active ? 'Yes' : 'No' });
    }

    this.logout = (req, res, data) => {
        let id = req.sessionId;
        if (global.base.isset(data.id)) {
            id = data.id;
        }
        craterServer.sessionsManager.destroy(id).then(done => {
            mainManager.respond(req, res, { status: true, message: "You have logged out" });
        });
    }

    this.editProfile = (req, res, data) => {
        data.lastModified = new Date().getTime();
        mainManager.set(req, { collection: 'accounts', query: { _id: new ObjectId(global.sessions[req.sessionId].user) }, options: { '$set': { editted: data } } }).then(result => {
            mainManager.respond(req, res, result == 1);
            mainManager.makeHistory(req, result == 1, { action: 'Edit Profile', data, collection: 'accounts', item: global.sessions[req.sessionId].user });

            if (result == 1) {
                mainManager.notifyAdmin({ title: 'Profile update request', note: 'A user request to update his/her profile, check it out and approve/decline.', link: `users.html?page=showUser&id=${result[0]._id.toString()}` });
            }
        });
    }

    this.changePassword = (req, res, data) => {
        mainManager.find(req, { collection: 'accounts', query: { _id: new ObjectId(global.sessions[req.sessionId].user) }, projection: { currentPassword: 1 } }).then(result => {
            if (!global.base.isnull(result)) {
                bcrypt.compare(data.currentPassword, result.currentPassword).then(valid => {
                    if (valid) {
                        bcrypt.hash(data.newPassword, 10).then(hash => {
                            data.newPassword = hash;
                            mainManager.set(req, { collection: 'accounts', query: { _id: new ObjectId(global.sessions[req.sessionId].user) }, options: { '$set': { currentPassword: data.newPassword } } }).then(changed => {
                                mainManager.respond(req, res, { status: true, message: "Password changed" });
                                mainManager.makeHistory(req, true, { action: 'Change Password', data, collection: 'accounts', item: global.sessions[req.sessionId].user });
                            });
                        });
                    }
                    else {
                        mainManager.respond(req, res, { status: false, message: "Password did not match" });
                    }
                });
            }
            else {
                mainManager.respond(req, res, { status: false, message: "Account not found" });
            }
        });
    }

    this.transfer = (req, res, data) => {
        mainManager.debit(req, { accountNo: data.source, amount: data.amount })
            .then(debitted => {
                if (debitted.status == true) {
                    mainManager.credit(req, { accountNo: data.destination, amount: data.amount })
                        .then(creditted => {
                            if (!creditted.status) {//rollback
                                mainManager.credit(req, res, { accountNo: data.source, amount: data.amount })
                                    .then(rollback => {
                                        if (!rollback.status) {//rollback
                                            this.notifyAdmin(req, { title: 'Rollback failure', note: `The rollback of a this transaction failed, ${data.source} needs to be credited`, link: `users.html?page=showUser&id=${result[0]._id.toString()}` });
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    });
                            }
                            let status = creditted;
                            let message = status ? "Transfer Successful" : "Transfer Failed";
                            mainManager.respond(req, res, { status, message });
                        })
                        .catch(error => {
                            mainManager.respond(req, res, error);
                        });
                }
                else {
                    mainManager.respond(req, res, debitted);
                }
            })
            .catch(error => {
                mainManager.respond(req, res, error);
            });
    }

    this.checkBalance = (req, res, data) => {
        // data._id = global.sessions[req.sessionId].user;
        mainManager.find(req, { collection: 'accounts', query: { _id: new ObjectId(data._id) }, options: { projection: { balance: 1, currency: 1, _id: 0 } } }).then(account => {
            let status = !!account;
            let message = status ? `The account balance is ${mainManager.convertToAccountCurrency(account.balance, account.currency)}` : "Account not found";
            let payload = status ? mainManager.convertToAccountCurrency(account.balance, account.currency) : undefined;
            mainManager.respond(req, res, { status, message, payload });
        });
    }
}

module.exports = AccountManager;