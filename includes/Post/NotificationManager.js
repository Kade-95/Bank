const MainManager = require('./MainManager');
const mainManager = new MainManager();

function NotificationManager() {
    this.getNotifications = (req, res, data) => {
        let notifications = [];
        let user = data.id || global.sessions[req.sessionId].user;
        mainManager.find({ collection: 'notifications', query: {}, many: true }).then(found => {
            for (let i = 0; i < found.length; i++) {
                if (found[i].users.includes(user)) {
                    found[i].status = global.base.isset(found[i].read[user]) ? 'Read' : 'UnRead';
                    found[i].delivered = global.base.isset(found[i].sent[user]);
                    delete found[i].read;
                    delete found[i].sent;
                    if (data.flag == 'unsent') {
                        if (!found[i].delivered) {
                            notifications.push(found[i]);
                        }
                    }
                    else if (data.flag == 'unread') {
                        if (found[i].status == 'UnRead') {
                            notifications.push(found[i]);
                        }
                    }
                    else {
                        notifications.push(found[i]);
                    }
                }
            }
            mainManager.respond(req, res, { status: 1, message: "Here are notifications", payload: notifications });
        });
    }

    this.sentNotification = (req, res, data) => {
        data.id = new ObjectId(data.id);
        mainManager.find({ collection: 'notifications', query: { _id: data.id }, projection: { sent: 1, _id: 0 } }).then(note => {
            note.sent[global.sessions[req.sessionId].user] = new Date().getTime();
            mainManager.set(req, { collection: 'notifications', query: { _id: data.id }, options: { '$set': { sent: note.sent } } }).then(sent => {
                let status = sent == 1;
                let message = status ? "Notification Sent" : "Notification not sent";
                mainManager.respond(req, res, { status, message });
            });
        });
    }

    this.readNotification = (req, res, data) => {
        data.id = new ObjectId(data.id);
        mainManager.find({ collection: 'notifications', query: { _id: data.id }, projection: { read: 1, _id: 0 } }).then(note => {
            note.read[global.sessions[req.sessionId].user] = new Date().getTime();
            mainManager.set(req, { collection: 'notifications', query: { _id: data.id }, options: { '$set': { read: note.read } } }).then(read => {
                let status = read == 1;
                let message = status ? "Notification Read" : "Notification not read";
                mainManager.respond(req, res, { status, message });
            });
        });
    }
}

module.exports = NotificationManager;