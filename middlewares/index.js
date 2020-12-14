const sessions = require('./sessions');
const csc = require('country-state-city');

function authenticate(req, res, next) {
    if (!req.session || !req.session.user) {
        let err = new Error('Session not found');
        err.statusCode = 401;
        next(err);
    }
    next();
}

function errorHandler(err, req, res, next) {
    if (err.message.toLowerCase().includes('mongo')) err.message = 'Database Error';
    res.status(err.statusCode || 422)
        .send({ status: false, message: err.message });
}

function logout(req, res, next) {
    req.session.user = undefined;
    if (req.session.user) {
        next(new Error('Logout failed'));
    }
    else {
        res.json({ status: true, message: 'Logout successful' });
    }
}

function ping(req, res, next) {
    let profile = req.params.profile;
    if (!req.session || !req.session.user) {
        next(new Error("I don't know you!!"));
    }
    else {
        if (profile == 'account' && req.session.user.roles.includes('Account')) {
            res.json({ status: true, message: `Hello User, ${req.session.user.id}` });
        }
        else if (profile == 'staff' && req.session.user.roles.includes('Staff')) {
            res.json({ status: true, message: `Hello Staff, ${req.session.user.id}` });
        }
        else {
            next(new Error("I don't know you!!"));
        }
    }
}

function rates(req, res, next) {
    if (global.rates) {
        res.json({ status: true, message: global.rates });
    }
    else {
        next(new Error('Error fetching currencies'));
    }
}

function convert(req, res, next) {
    let {from, to, amount} = req.params;
    res.json({status: true, message: global.convert(from, to, amount)});
}

function getImage(req, res, next) {
    let { type, user, image } = req.params;
    let path = `data/${type}/${user}/${image}`;
    res.sendFile(path, { root: './' });
}

function registration(req, res, next) {
    let rates = Object.keys(global.rates);
    let nationalities = [];
    for(let c of csc.default.getAllCountries()){
        nationalities.push(c.name);
    }
    res.json({ status: true, message: { rates, nationalities } });
}

module.exports = { authenticate, errorHandler, ping, logout, sessions, rates, getImage, registration };