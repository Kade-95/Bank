const { Staff } = require('../doa');
const bcrypt = require('bcrypt');
const Transaction = require('./transaction');
const nodemailer = require('nodemailer');

async function login(username, password) {
    try {
        const profile = await Staff.find({ username });
        const match = await bcrypt.compare(password, profile.pwHash);
        if (match) {
            return { id: profile._id, username, roles: profile.roles };
        }
        else {
            return Promise.reject('Username or password incorrect');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

async function changePassword(_id, currentPassword, password) {
    try {
        const staff = await Staff.find({ _id });
        const match = await bcrypt.compare(currentPassword, staff.pwHash);

        if (match) {
            let update = await Staff.update({ _id }, { pwHash: await bcrypt.hash(password, 10) });
            return update ? 'Password changed' : Promise.reject('Error changing password');
        }
        else {
            return Promise.reject('Password incorrect');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

async function get(query, options = { start: 0, end: 1, many: false }) {
    let selectMany = (options.end - options.start) > 1
    options.many = options.many || selectMany;
    try {
        let found = await Staff.find(query, options.many);
        if (selectMany) {
            found = found.slice(options.start, options.end);
        }
        return found;
    } catch (error) {
        return Promise.reject(error);
    }
}

function update(query, data) {
    delete data.roles;
    delete data.pwHash;
    delete data.balance;
    delete data._id;
    return Staff.update(query, data);
}

function create(data) {
    return Staff.create(data);
}

function remove(query) {
    return Staff.remove(query);
}

async function transactions(start = 0, end = 1) {
    try {
        let h = await Transaction.get({}, start, end);
        return h;
    } catch (error) {
        return Promise.reject(error);
    }
}

async function notify(subject, text) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    let mailOptions = {
        from: '',
        subject,
        text
    };

    try {
        let staff = await Staff.find({}, true);
        for (let i = 0; i < staff.length; i++) {
            mailOptions.to = staff[i].email;
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) console.log(error);
                else {
                    console.log(`Email sent to ${info.response}`)
                }
            });
        }
    } catch (error) {

    }
}

module.exports = {
    login,
    get,
    update,
    create,
    remove,
    changePassword,
    transactions,
    notify
}