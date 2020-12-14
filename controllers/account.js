const { Account, Request } = require('../services');
const bcrypt = require('bcrypt');

function login(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        let err = new Error('Bad request params - you need to provide an username and password');
        return next(err);
    }

    Account.login(username, password)
        .then(user => {
            req.session.user = user;
            res.json({ status: true, message: 'You logged in' });
        })
        .catch(error => {
            let err = new Error(error);
            err.statusCode = 404;
            next(err);
        });
}

function get(req, res, next) {
    if (req.session.user.roles.includes('Staff')) {
        Account.get({ _id: req.params.id })
            .then(user => {
                user.pwHash = undefined;
                res.json({ status: true, message: user });
            })
            .catch(error => {
                next(new Error(error));
            });
    }
    else {
        res.json({ status: false, message: 'You are not authorized' });
    }
}

function create(req, res, next) {
    let data = req.body;
    Account.create(data)
        .then(account => {
            res.json({ status: true, message: { account, message: 'Account created' } });
        })
        .catch(error => {
            let err = new Error(error);
            next(err);
        });
}

async function getAccountsForTransfer(req, res, next) {
    let accountNo = req.params.number;
    try {
        let accounts = await Account.get({ accountNo });
        res.json({ status: true, message: accounts });
    } catch (error) {
        next(new Error(error));
    }
}

async function transfer(req, res, next) {
    const { accountNumber: to, amount, password } = req.body;

    let { accountNo: from, pwHash, currency } = await Account.get({ _id: req.session.user.id });

    let match = await bcrypt.compare(password, pwHash);
    if (match) {
        Account.debit(from, amount, `You transfered money to ${to} account`, currency)
            .then(debited => {
                Account.credit(to, amount, `${from} transfered money to you`, currency)
                    .then(credited => {
                        res.json({ status: true, message: 'Transfer successful' });
                    })
                    .catch(error => {
                        Account.credit(from, amount, `Transfer of money to ${to} account reverted`, currency);
                        next(new Error(error));
                    });
            })
            .catch(error => {
                next(new Error(error));
            });
    }
    else {
        next(new Error('Password is not correct'));
    }
}

async function request(req, res, next) {
    let details = req.body;
    let type = req.params.type;
    try {
        let message = await Request.request(type, req.session.user.id, details);
        res.json({ status: true, message });
    } catch (error) {
        next(new Error(error));
    }
}

function changePassword(req, res, next) {
    let { newPassword, currentPassword } = req.body;
    Account.changePassword(req.session.user.id, currentPassword, newPassword)
        .then(message => {
            res.json({ status: true, message });
        })
        .catch(error => {
            next(new Error(error));
        });
}

async function freeze(req, res, next) {
    let _id = req.params._id;
    try {
        if (req.session.user.roles.includes('Admin')) {
            let work = await Account.freeze(_id);
            res.json({ status: true, message: 'Account has been frozen' });
        }
        else {
            next(new Error('You are not authorized'));
        }
    } catch (error) {
        next(new Error(error));
    }
}

async function unFreeze(req, res, next) {
    let _id = req.params._id;
    try {
        if (req.session.user.roles.includes('Admin')) {
            let work = await Account.unFreeze(_id);
            res.json({ status: true, message: 'Account has been unfrozen' });
        }
        else {
            next(new Error('You are not authorized'));
        }
    } catch (error) {
        next(new Error(error));
    }
}

async function remove(req, res, next) {
    let _id = req.params._id;
    try {
        if (req.session.user.roles.includes('Admin')) {
            let work = await Account.remove(_id);
            res.json({ status: true, message: 'Account has been removed' });
        }
        else {
            next(new Error('You are not authorized'));
        }
    } catch (error) {
        next(new Error(error));
    }
}

module.exports = {
    login,
    get,
    create,
    transfer,
    request,
    changePassword,
    freeze,
    unFreeze,
    remove,
    getAccountsForTransfer
}