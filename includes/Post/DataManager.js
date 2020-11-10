const MainManager = require('./MainManager');
const mainManager = new MainManager();

function DataManager() {
    this.search = (req, res, data) => {
        let found = { items: [], users: [], categories: [], tags: [], lists: [] };
        let query = data.query.toLowerCase();

        global.base.runParallel({

        }, result => {
            return new Promise((resolve, reject) => {
                for (let collection in result) {
                    for (let item of result[collection]) {
                        if (JSON.stringify(item).toLowerCase().includes(query)) {
                            if (collection == 'users') {
                                found[collection].push({ _id: item._id, name: item.userName, image: item.userImage });
                            }
                            else if (collection == 'items') {
                                found[collection].push({ _id: item._id, name: item.name, image: item.image });
                            }
                            else if (collection == 'categories') {
                                found[collection].push({ _id: item._id, name: item.name, image: item.image });
                            }
                            else if (collection == 'tags') {
                                found[collection].push({ _id: item._id, name: item.name, image: item.image });
                            }
                            else if (collection == 'list') {
                                found[collection].push({ _id: item._id, name: item.name });
                            }
                        }
                    }
                }
                mainManager.respond(req, res, found);
                resolve(found);
            });
        });
    }

    this.find = (req, res, data) => {
        let params = JSON.parse(data.params);
        params = mainManager.organizeData(params);
        let action = params.action;
        delete params.action;

        let prepareResult = result => {
            let preparedResult;
            if (!global.base.isnull(result)) {
                if (Array.isArray(result)) {
                    preparedResult = [];
                    for (let i in result) {
                        delete result[i].currentPassword;
                    }
                }
                else if (typeof result == 'object') {
                    delete result.currentPassword;
                }
            }
            preparedResult = result;

            return preparedResult
        }

        if (global.base.isset(action)) {
            mainManager.respond(req, res, 'actioned');
        }
        else {
            mainManager.find(params).then(result => {
                mainManager.respond(req, res, prepareResult(result));
            });
        }
    }

    this.removeFromRecycleBin = (req, res, data) => {
        mainManager.delete({ collection: data.collection, query: { _id: new ObjectId(data.id) } }).then(result => {
            mainManager.respond(req, res, result.result.ok == 1);
            mainManager.makeHistory(req, result.result.ok == 1, { action: 'Removed From Recycle Bin', data, collection: data.collection, item: data.id });
        })
    }

    this.recycle = (req, params) => {
        params.options = { $set: { recycled: true, timeDeleted: new Date().getTime() } };
        return mainManager.update(params);
    }

    this.revert = (req, res, data) => {
        mainManager.update(req, { collection: data.collection, query: { _id: new ObjectId(data.id) }, options: { $set: { recycled: false, timeReverted: new Date().getTime() } } }).then(result => {
            mainManager.respond(req, res, (result == 1));
            mainManager.makeHistory(req, result == 1, { action: `Reverted`, data, collection: data.collection, item: data.id });
        });
    }

    this.emptyRecycleBin = (req, res, data) => {
        global.base.runParallel({

        }, result => {
            mainManager.respond(req, res, true);
            mainManager.makeHistory(req, true, { action: 'Empty Recycle Bin', data, item: 'System' });
        });
    }
}

module.exports = DataManager;