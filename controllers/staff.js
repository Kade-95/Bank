const { Staff, Request } = require('../services');

function login(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        let err = new Error('Bad request params - you need to provide an username and password');
        return next(err);
    }

    Staff.login(username, password)
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
        Staff.get({ _id: req.params.id })
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
    let { staffUsername: username, staffEmail: email, staffPassword: password } = req.body;
    if (!req.session || !req.session.user || !req.session.user.roles || !req.session.user.roles.includes('Admin')) {
        next(new Error('You are not authorized'));
    }
    else {
        Staff.create({ username, email, password })
            .then(staff => {
                res.json({ status: true, message: { staff, message: 'Staff created' } });
            })
            .catch(error => {
                let err = new Error(error);
                next(err);
            });
    }
}

function edit(req, res, next) {
    if (req.session.user.roles.includes('Staff')) {
        req.body.user = req.session.user.id;
        Staff.update({ _id: req.session.user.id }, req.body)
            .then(updated => {
                if (!!updated) {
                    res.json({ status: true, message: 'Staff updated' });
                }
                else {
                    res.json({ status: false, message: 'Error updating profile' });
                }
            })
            .catch(error => {
                next(new Error(error));
            });
    }
    else {
        res.json({ status: false, message: 'You are not authorized' });
    }
}

async function resolve(req, res, next) {
    let { id, decision } = req.body;
    try {
        let message = await Request.resolve(id, decision, req.session.user.id);
        res.json({ status: true, message });
    } catch (error) {
        next(new Error(error));
    }
}

function changePassword(req, res, next) {
    Staff.changePassword(req.session.user.id, currentPassword, newPassword)
        .then(message => {
            res.json({ status: true, message });
        })
        .catch(error => {
            next(new Error(error));
        });
}

async function remove(req, res, next) {
    let _id = req.params._id;

    try {
        if (req.session.user.roles.includes('Admin')) {
            let work = await Staff.remove({ _id });
            res.json({ status: true, message: 'Staff has been removed' });
        }
        else {
            next(new Error('You are not authorized'));
        }
    } catch (error) {
        next(new Error(error));
    }
}

async function unResolved(req, res, next) {
    let get = async (type) => {
        try {
            let edit = await Request.get({ type, resolved: false }, { many: true });
            return edit.length;
        } catch (error) {
            return 0;
        }
    }
    let edit = await get('editaccount');
    let deposit = await get('creditaccount');
    let withdraw = await get('debitaccount');
    let transfer = await get('externaltransfer');
    res.json({ status: true, message: {edit, deposit, withdraw, transfer} });
}

module.exports = {
    login,
    get,
    create,
    edit,
    resolve,
    changePassword,
    remove,
    unResolved
}