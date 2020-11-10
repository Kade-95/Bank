const MainManager = require('./MainManager');
const mainManager = new MainManager();

function AdminManager() {
    this.login = (req, res, data) => {
        if (data.userName == undefined || data.currentPassword == undefined) {
            mainManager.respond(req, res, { status: false, message: "Username or Password incorrect" });
        }
        else {
            mainManager.find(req, { collection: 'staff', query: { userName }, projection: { currentPassword: 1 } }).then(result => {
                if (!global.base.isnull(result)) {
                    bcrypt.compare(data.currentPassword, result.currentPassword).then(valid => {
                        if (valid) {
                            mainManager.respond(req, res, { status: true, message: 'Login Successful', payload: result._id });
                            global.sessions[req.sessionId].set({ user: ObjectId(result._id).toString(), active: true, tenant });
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
        mainManager.find({ collection: 'staff', query: { collection: 'staff', query: { _id: new ObjectId(global.sessions[req.sessionId].user) }, projection: { type: 1, _id: 0 } } }).then(staff => {
            if (staff.type == 'admin') {
                bcrypt.hash(data.currentPassword, 10).then(hash => {
                    data.currentPassword = hash;
                    mainManager.ifNotExist(req, { collection: 'admins', query: data, check: [{ userName: data.userName }, { email: data.email }], action: 'insert', getInserted: true }).then(result => {
                        if (!global.base.isset(result.found)) {
                            mainManager.respond(req, res, { status: true, message: 'Staff created successfully', payload: result[0]._id });

                            mainManager.makeHistory(req, global.base.isset(result[0]), { action: 'Staff Creation', data, collection: 'staff', item: result[0]._id.toString() });

                            mainManager.notify(req, { title: 'Welcome Note', note: 'You are welcome to the system (Staff)', users: [result[0]._id.toString()] });
                        }
                        else {
                            mainManager.respond(req, res, { status: false, message: `Found staff with the same '${result.found.join(',')}'` });
                        }
                    });
                });
            }
        })
    }

    this.deleteAccount = (req, res, data) => {
        mainManager.recycle(req, { collection: 'accounts', query: { _id: ObjectId(data.user) } }).then(result => {
            let status = result == 1;
            let message = status ? "Account deleted successfully" : "Account not deleted";
            mainManager.respond(req, res, { status, message });
            data.by = global.sessions[req.sessionId].user;
            mainManager.makeHistory(req, result == 1, { action: 'Delete Account', data, collection: 'staff', item: data.user });
        });
    }

    this.freezeAccount = (req, res, data) => {
        mainManager.update(req, { collection: 'accounts', query: { _id: ObjectId(data.user) }, options: { "$set": { frozen: true } } }).then(result => {
            mainManager.respond(req, res, (result == 1));
            data.by = global.sessions[req.sessionId].user;
            mainManager.makeHistory(req, result == 1, { action: 'Freeze Account', data, collection: 'staff', item: data.user });
        });
    }

    this.unFreezeAccount = (req, res, data) => {
        mainManager.update(req, { collection: 'accounts', query: { _id: ObjectId(data.user) }, options: { "$set": { frozen: false } } }).then(result => {
            mainManager.respond(req, res, (result == 1));
            data.by = global.sessions[req.sessionId].user;
            mainManager.makeHistory(req, result == 1, { action: 'Unfreeze Account', data, collection: 'staff', item: data.user });
        });
    }

    this.isActive = (req, res, data) => {
        let active = false;
        console.log(global.sessions[req.sessionId]);
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
            mainManager.respond(req, res, { status: true, message: "You logged out" });
        });
    }

    this.changeDp = (req, res, data) => {
        let staffPath = `./staff/${req.sessionId}`;
        let staffImage = `./staff/${req.sessionId}/dp.png`;

        let uploadImage = () => {
            fs.writeFile(staffImage, data.newImage.value, c => {
                mainManager.set(req, { collection: 'staff', query: { _id: new ObjectId(global.sessions[req.sessionId].user) }, options: { '$set': { staffImage: staffImage } } }).then(result => {
                    let status = result == 1;
                    let message = status ? "Profile picture changed successfully" : "Profile picture not changed";
                    mainManager.respond(req, res, { status, message });

                    mainManager.makeHistory(req, result == 1, { action: 'Change Profile Picture', data, collection: 'staff', item: global.sessions[req.sessionId].user });

                });
            });
        }

        fs.exists(staffPath, foundUser => {
            if (!foundUser) {
                fs.mkdir(staffPath, { recursive: true }, () => {
                    uploadImage();
                });
            }
            else {
                uploadImage();
            }
        });
    }

    this.editProfile = (req, res, data) => {
        data.lastModified = new Date().getTime();
        delete data.type;
        mainManager.set(req, { collection: 'staff', query: { _id: new ObjectId(global.sessions[req.sessionId].user) }, options: { '$set': data } }).then(result => {
            let status = result == 1;
            let message = status ? "Profile updated successfully" : "Profile not updated";
            mainManager.respond(req, res, { status, message });

            mainManager.makeHistory(req, result == 1, { action: 'Edit Profile', data, collection: 'staff', item: global.sessions[req.sessionId].user });
        });
    }

    this.changePassword = (req, res, data) => {
        mainManager.find(req, { collection: 'staff', query: { _id: new ObjectId(global.sessions[req.sessionId].user) }, projection: { currentPassword: 1 } }).then(result => {
            if (!global.base.isnull(result)) {
                bcrypt.compare(data.currentPassword, result.currentPassword).then(valid => {
                    if (valid) {
                        bcrypt.hash(data.newPassword, 10).then(hash => {
                            data.newPassword = hash;
                            mainManager.set(req, { collection: 'staff', query: { _id: new ObjectId(global.sessions[req.sessionId].user) }, options: { '$set': { currentPassword: data.newPassword } } }).then(changed => {
                                mainManager.respond(req, res, { status: true, message: "Password changed successfully" });
                                mainManager.makeHistory(req, true, { action: 'Change Password', data, collection: 'users', item: global.sessions[req.sessionId].user });
                            });
                        });
                    }
                    else {
                        mainManager.respond(req, res, { status: false, message: "Password mismatch" });
                    }
                });
            }
            else {
                mainManager.respond(req, res, { status: false, message: "Staff account not found" });
            }
        });
    }

    this.handleAccountChanges = (req, res, data) => {
        mainManager.find(req, { collection: 'accounts', query: { _id: new ObjectId(data.account), options: { projection: { edit: 1, _id: 0 } } } }).then(account => {
            if (account) {
                if (account.edit && account.edit.constructor == Object) {
                    let data;
                    delete account.edit.balance;

                    if (data.status == "Reject") {
                        data = {};
                    }
                    else if (data.status == "Accept") {
                        data = account.edit;
                    }
                    data.edit = undefined;

                    mainManager.update(req, { collection: 'accounts', query: { _id: new ObjectId(data.account) }, options: { '$set': data } }).then(handled => {
                        let status = handled == 1;
                        let message = status ? "Account Changes handled successfully" : "Account changed not handled";
                        mainManager.respond(req, res, { status, message });
                    })
                }
                else {
                    mainManager.respond(req, res, { status: false, message: "Account no change request found" });
                }
            }
            else {
                mainManager.respond(req, res, { status: false, message: "Account not found" });
            }
        });
    }

    this.handleTransfer = (req, res, data) => {

    }
}

module.exports = AdminManager;