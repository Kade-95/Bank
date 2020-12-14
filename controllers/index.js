const Account = require('./account');
const Staff = require('./staff');
const services = require('../services');

function login(req, res, next) {
    if (req.params.profile == 'account') {
        Account.login(req, res, next);
    }
    else if (req.params.profile == 'staff') {
        Staff.login(req, res, next);
    }
    else {
        next(new Error('Error: Unknown profile'));
    }
}

function create(req, res, next) {
    if (req.params.profile == 'account') {
        Account.create(req, res, next);
    }
    else if (req.params.profile == 'staff') {
        Staff.create(req, res, next);
    }
    else {
        next(new Error('Error: Unknown profile'));
    }
}

function changePassword(req, res, next) {
    let { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
        next(new Error('Both current and new passwords are needed'));
    }
    else if (req.session.user.roles.includes('Staff')) {
        return Staff.changePassword(req, res, next);
    }
    else if (req.session.user.roles.includes('Account')) {
        return Account.changePassword(req, res, next);
    }
    else {
        next(new Error('Error: Unknown profile'));
    }
}

async function find(req, res, next) {
    let collection = req.params.collection;
    let { start, end, mine, many, query } = req.query;
    let user = req.session.user;
    let found;
    many = !!+many;
    try {
        query = JSON.parse(query);
    } catch (error) {
        query = {}
    }
    start = start ? start : 0;
    end = end ? end : 1;

    try {
        if (collection == 'account') {
            if (mine) {
                found = await services.Account.get({ _id: user.id });
            }
            else if (user.roles.includes('Staff')) {
                found = await services.Account.get(query, { start, end, many });
            }
            else {
                next(new Error('Error: Unauthorized'));
                return;
            }

            if (found) {
                if (Array.isArray(found)) {
                    for (let i in found) {
                        if (found[i].balance) found[i].balance = await global.convert(global.currency, found[i].currency, found[i].balance);
                    }
                }
                else if (found.constructor == Object && found.balance) {
                    found.balance = await global.convert(global.currency, found.currency, found.balance);
                }
            }
        }
        else if (collection == 'staff') {
            if (mine) {
                found = await services.Staff.get({ _id: user.id });
            }
            else if (user.roles.includes('Admin')) {
                found = await services.Staff.get(query, { start, end, many });
            }
            else {
                next(new Error('Error: Unauthorized'));
                return;
            }
        }
        else if (collection == 'request') {
            if (user.roles.includes('Staff')) {
                found = await services.Request.get(query, { start, end, many });
            }
            else {
                next(new Error('Error: Unauthorized'));
                return;
            }
        }
        else if (collection == 'transaction') {
            if (mine) {
                query.author = user.id;
                found = await services.Transaction.get(query, { start, end, many });
            }
            else if (user.roles.includes('Staff')) {
                found = await services.Transaction.get(query, { start, end, many });
            }
            else {
                next(new Error('Error: Unauthorized'));
                return;
            }

            if (found) {
                if (Array.isArray(found)) {
                    for (let i = 0; i < found.length; i++) {
                        if (found[i].balance) found[i].balance = await global.convert(global.currency, found[i].currency, found[i].balance);
                        if (found[i].amount) found[i].amount = await global.convert(global.currency, found[i].currency, found[i].amount);
                    }
                }
                else if (found.constructor == Object) {
                    if (found.balance) found.balance = await global.convert(global.currency, found.currency, found.balance);
                    if (found.amount) found.amount = await global.convert(global.currency, found.currency, found.amount);
                }
            }
        }
        else {
            next(new Error('Error: Unknown search collection'));
        }

        if (found) {
            found.pwHash = undefined;
            found.__v = undefined;
            res.json({ status: true, message: found });
        }
        else {
            next(new Error(`Not found`));
        }
    } catch (error) {
        next(new Error(error));
    }
}

module.exports = {
    Account,
    Staff,
    login,
    create,
    changePassword,
    find
}