const { Account } = require('../doa');
const Transaction = require('./transaction');
const bcrypt = require('bcrypt');

async function login(username, password) {
    try {
        const profile = await Account.find({ username });
        const match = await bcrypt.compare(password, profile.pwHash);
        if (match) {
            return { id: profile._id, username, roles: profile.roles };
        }
        else {
            return Promise.reject('Username or password incorrect');
        }
    } catch (error) {
        return Promise.reject('Account not found');
    }
}

async function changePassword(_id, currentPassword, password) {
    try {
        const account = await Account.find({ _id });
        const match = await bcrypt.compare(currentPassword, account.pwHash);

        if (match) {
            let update = await Account.update({ _id }, { pwHash: await bcrypt.hash(password, 10) });
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
        let found = await Account.find(query, options.many);
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
    return Account.update(query, data);
}

function create(data) {
    return Account.create(data);
}

async function debit(accountNo, amount, details, currency) {
    try {
        const acct = await Account.find({ accountNo });//get the profile

        if (!acct.roles.includes('Account')) return Promise.reject('Not an account');//is profile an account

        let balance = acct.balance || 0;//subtract the amount
        //convert amount to base currency
        amount = await global.convert(currency, global.currency, amount);
        balance = balance - amount;

        if (balance < 0) return Promise.reject('Insufficient balance');//is balance sufficient

        let update = await Account.update({ accountNo }, { balance });//update balance
        Transaction.add({ author: acct._id, type: 'debit', amount, details, currency: acct.currency, balance: update.balance });

        return update;
    } catch (error) {
        return Promise.reject(error);
    }
}

async function credit(accountNo, amount, details, currency) {
    try {
        const acct = await Account.find({ accountNo });//get the profile

        if (!acct.roles.includes('Account')) return Promise.reject('Not an account');//is profile an account

        let balance = acct.balance || 0;//add the amount
        //convert amount to base currency
        amount = await global.convert(currency, global.currency, amount);
        balance = balance + amount;

        let update = await Account.update({ accountNo }, { balance });//update balance
        Transaction.add({ author: acct._id, type: 'credit', amount, details, currency: acct.currency, balance: update.balance });
        return update;
    } catch (error) {
        return Promise.reject(error);
    }
}

function freeze(_id) {
    return Account.update({ _id }, { frozen: true });
}

function unFreeze(_id) {
    return Account.update({ _id }, { frozen: false });
}

function remove(_id) {
    return Account.remove({ _id });
}

module.exports = {
    login,
    get,
    update,
    create,
    debit,
    credit,
    changePassword,
    freeze,
    unFreeze,
    remove
}