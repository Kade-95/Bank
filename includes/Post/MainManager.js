const { tree } = require("kedio/Icons");

function MainManager() {
    this.respond = (req, res, data = { status: false, message: null, payload: null }, encode = true) => {
        let response;
        if (encode == true) {
            data.payload = data.payload || null;
            data.message = data.message || null;
            data.status = data.status || false;
            let sentence = JSON.stringify(data);
            let dictionary = global.base.array.toSet(sentence.split('')).join('');
            let code = compressor.encodeLZW(sentence, dictionary);
            let encoded = JSON.stringify({ code, dictionary, encoded: true });
            response = sentence < encoded ? sentence : encoded;
        }
        else {
            response = JSON.stringify(data);
        }

        global.base.log(`Reply to ${req.sessionId}  ==>  ${data.message}`)

        res.end(response);
    }

    this.makeHistory = (req, flag, event) => {
        if (flag) {
            event.timeCreated = new Date().getTime();
            event.by = global.sessions[req.sessionId].user;
            global.db.insert({ collection: 'history', query: event });
        }
    }

    this.find = (req, params) => {
        return global.db.find(params);
    }

    this.ifNotExist = (req, params) => {
        if (params.action == 'insert') {
            params.query.timeCreated = new Date().getTime();
            params.query.lastModified = new Date().getTime();
        }
        else if (params.action == 'update') {
            params.query.lastModified = new Date().getTime();
        }
        return new Promise(async (resolve, reject) => {
            let data, found;
            for (let i = 0; i < params.check.length; i++) {
                data = await this.find(req, { collection: params.collection, query: params.check[i], many: true });
                data = global.base.array.find(data, d => {
                    return d.recycled != true;
                });

                found = global.base.isset(data);

                if (found) {
                    resolve({ found: Object.keys(params.check[i]) });
                    break
                }
            }
            if (!found) {
                global.db[params.action](params).then(worked => {
                    resolve(worked);
                }).catch(error => {
                    reject(error)
                });
            }
        });
    }

    this.ifIExist = (req, params) => {
        if (params.action == 'update') {
            if (global.base.isset(params.option)) {
                if (global.base.isset(params.options['$set'])) {
                    params.options['$set'].lastModified = new Date().getTime();
                }
                if (global.base.isset(params.options['$push'])) {
                    params.options['$push'].lastModified = new Date().getTime();
                }
                if (global.base.isset(params.options['$pull'])) {
                    params.options['$pull'].lastModified = new Date().getTime();
                }
            }
        }

        return global.db.ifIExist(params);
    }

    this.insert = (req, params) => {
        params.query.timeCreated = new Date().getTime();
        params.query.lastModified = new Date().getTime();

        return global.db.insert(params);
    }

    this.save = (req, params) => {
        params.query.timeCreated = new Date().getTime();
        params.query.lastModified = new Date().getTime();

        return global.db.save(params);
    }

    this.delete = (req, params) => {
        return global.db.delete(params);
    }

    this.set = (req, params) => {
        params.options['$set'].lastModified = new Date().getTime();

        return global.db.update(params);
    }

    this.pull = (req, params) => {
        return global.db.update(params);
    }

    this.push = (req, params) => {
        return global.db.update(params);
    }

    this.update = (req, params) => {
        params.options['$set'] = params.options['$set'] || { lastModified: new Date().getTime() };

        return global.db.update(params);
    }

    this.organizeData = (params) => {
        if (global.base.isset(params.query)) {
            if (global.base.isset(params.changeQuery)) {
                for (var i in params.changeQuery) {
                    if (global.base.isset(params.query[i])) {
                        if (params.changeQuery[i] == 'objectid') {
                            params.query[i] = new ObjectId(params.query[i]);
                        }
                    }
                }
            }
        }
        return params;
    }

    this.prepareData = (data) => {
        let preparedData = {};
        let value;
        for (let i in data) {
            if (!global.base.isset(preparedData[i])) {

                if (data[i].filename != '') {
                    value = data[i];
                }
                else {
                    value = data[i].value.toString();
                    if (value == '[object Object]') {
                        value = data[i];
                    }
                }
                preparedData[i] = value;
            }
        }

        if (global.base.isTruthy(preparedData.encoded)) {
            let decoded = compressor.decodeLZW(preparedData.code.split(','), preparedData.dictionary);

            try {
                preparedData = JSON.parse(decoded);
            } catch (error) {
                preparedData = decoded;
            }
        }

        return preparedData;
    }

    this.notify = (req, params) => {
        params.time = new Date().getTime();
        params.read = {};
        params.sent = {};

        this.insert(req, { collection: 'notifications', query: params });
    }

    this.notifyAdmin = (req, params) => {
        this.find(req, { collection: 'admins', query: {}, projection: { _id: 1 }, many: true }).then(admins => {
            admins = global.base.array.each(admins, a => {
                return a._id.toString();
            });
            params.users = admins;
            this.notify(req, params);
        });
    }

    this.newAccountID = () => {
        return global.db.find({ collection: 'accounts', query: {}, many: true, options: { projection: { _id: 1 } } }).then(accounts => {
            let flag = true;
            let _id;
            do {
                _id = (Date.now() * Math.random() * 10).toString().slice(0, 10);
                flag = accounts.includes(_id);
            } while (flag);
            return _id;
        });
    }

    this.convertToBaseCurrency = (amount, currency) => {
        return amount;
    }

    this.convertToAccountCurrency = (amount, currency) => {
        return amount;
    }

    this.credit = (req, data) => {
        return this.find(req, { collection: 'accounts', query: { accountNo: data.accountNo }, options: { projection: { balance: 1, currency: 1, _id: 0 } } })
            .then(account => {
                if (account) {
                    if (account.balance == undefined) account.balance = 0;
                    account.balance -= 0;
                    account.balance += this.convertToBaseCurrency(data.amount, account.currency) / 1;
                    return this.update(req, { collection: 'accounts', query: { accountNo: data.accountNo }, options: { "$set": { balance: account.balance } } })
                        .then(creditted => {
                            let status = creditted == 1;
                            let message = status ? "Credit was successful" : "Credit Failed";
                            let reply = { status, message };

                            data.status = status;
                            data.message = message;
                            this.makeHistory(req, status, { action: 'Account Credited', data, collection: 'accounts', item: data.accountNo });
                            return reply;
                        })
                        .catch(error => {
                            return { status: false, message: "Error crediting account", payload: error };
                        });
                }
                else {
                    let reply = { status: false, message: "Credit account not found" };
                    return reply;
                }
            })
            .catch(error => {
                return { status: false, message: "Error finding the credit account", payload: error };
            });
    }

    this.debit = (req, data) => {
        return this.find(req, { collection: 'accounts', query: { accountNo: data.accountNo }, options: { projection: { balance: 1, currency: 1, _id: 0 } } })
            .then(account => {
                if (account) {
                    if (account.balance == undefined) account.balance = 0;
                    account.balance -= 0;
                    account.balance -= this.convertToBaseCurrency(data.amount, account.currency) / 1;

                    if (account.balance < 0) return { status: false, message: 'Insufficient Fund' };

                    return this.update(req, { collection: 'accounts', query: { accountNo: data.accountNo }, options: { "$set": { balance: account.balance } } })
                        .then(creditted => {
                            let status = creditted == 1;
                            let message = status ? "Debit was successful" : "Debit Failed";
                            let reply = { status, message };

                            data.status = status;
                            data.message = message;
                            this.makeHistory(req, status, { action: 'Account Debited', data, collection: 'accounts', item: data.accountNo });
                            return reply;
                        })
                        .catch(error => {
                            return { status: false, message: "Error debiting account", payload: error };
                        });
                }
                else {
                    let reply = { status: false, message: "Debit account not found" };
                    return reply;
                }
            })
            .catch(error => {
                return { status: false, message: "Error finding the debit account", payload: error };
            });
    }
}

module.exports = MainManager;