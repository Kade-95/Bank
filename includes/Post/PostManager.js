const MainManager = require('./MainManager');
const NotificationManager = require('./NotificationManager');
const AccountManager = require('./AccountManager');
const DataManager = require('./DataManager');
const AdminManager = require('./AdminManager');

const mainManager = new MainManager();
const notificationManager = new NotificationManager();
const accountManager = new AccountManager();
const dataManager = new DataManager();
const adminManager = new AdminManager();

let requestHandlers = {
    admin: adminManager,
    account: accountManager,
    notification: notificationManager,
    data: dataManager
};

function PostManager() {
    this.ignoreActive = [
        { handler: 'user', action: 'login' },
        { handler: 'tenant', action: 'create' }
    ];

    this.adminOnly = ['createUser', 'makeAdmin', 'makeStaff', 'deleteUser'];

    this.locals = [bankServer.url]

    this.deliver = (req, res, data) => {
        if (global.base.isset(requestHandlers[data.handler])) {//is handler set
            if (global.base.isset(requestHandlers[data.handler][data.action])) {//is action set
                if (data.body == undefined) {
                    mainManager.respond(req, res, { status: false, message: 'Error! request body not found' });
                    return;
                }

                try {
                    data.body = JSON.parse(data.body);
                } catch (error) {
                    mainManager.respond(req, res, { status: false, message: 'Error! Invalid request body(Use JSON)' });
                    return;
                }

                try {
                    if (this.isActive(req.sessionId)) {//is user active(logged in)
                        requestHandlers[data.handler][data.action](req, res, data.body);
                    }
                    // else if (this.ignoreActive.find(h => (h.handler == data.handler && h.action == data.action))) {
                    //     requestHandlers[data.handler][data.action](req, res, data.body);//public api
                    // }
                    else {
                        requestHandlers[data.handler][data.action](req, res, data.body);//public api
                        // mainManager.respond(req, res, { status: false, message: "Error: Not Authorized" });//not allowed
                    }
                } catch (error) {
                    mainManager.respond(req, res, { status: false, message: 'Error! Request failed due to unknown error' });
                }
            }
            else {
                mainManager.respond(req, res, { status: false, message: "Error: Unknown request" });//request not found
            }
        }
        else {
            // request handler not found
            mainManager.respond(req, res, { status: false, message: "Error: Unknown request handler encountered" });
        }
    }

    this.act = (req, res, data) => {
        data = mainManager.prepareData(data);
        this.deliver(req, res, data);
    }

    this.isActive = (user) => {
        return global.sessions[user].active;
    }
}

module.exports = { PostManager };