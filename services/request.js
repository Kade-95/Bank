const Request = require('../doa/request');
const Account = require('./account');
const bcrypt = require('bcrypt');

async function resolve(_id, value, resolver) {
    let resolve, message;
    try {
        if (value) {
            let request = await Request.find({ _id });
            if (request.resolved) {
                return Promise.reject("This request has already been resolved");
            }
            else if (request.type == 'creditaccount') {
                await resolveCreditAccount(request.details.accountNo, request.details.amount, request.details.currency)
            }
            else if (request.type == 'debitaccount') {
                await resolveDebitAccount(request.details.accountNo, request.details.amount, request.details.currency)
            }
            else if (request.type == 'editaccount') {
                await resolveEditAccount(request.author, request.details);
            }
            else if (request.type == 'externaltransfer') {
                await resolveExternalTransfer(request.details.accountNo, request.details.amount, request.details.to, request.details.currency);
            }

            resolve = await Request.resolve(_id, resolver, true);
            message = `Request approved`
        }
        else {
            message = 'Request declined';
            resolve = await Request.resolve(_id, resolver, false);
        }
        return message;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

async function request(type, author, details) {
    let password = details.password;
    delete details.password;
    try {
        let { pwHash } = await Account.get({ _id: author });
        let match = await bcrypt.compare(password, pwHash);

        if (match) {
            let message;

            if (type == 'credit') {
                message = await creditAccount(author, details);
            }
            else if (type == 'debit') {
                message = await debitAccount(author, details);
            }
            else if (type == 'edit') {
                message = await editAccount(author, details);
            }
            else if (type == 'transfer') {
                message = await externalTransfer(author, details);
            }

            return message;
        }
        else {
            return Promise.reject('Password incorrect');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

async function editAccount(author, details) {
    if (details.image) {
        details.image = await global.storeImage(author, 'account', details.image);
        Account.update({ _id: author }, { image: details.image });
    }
    details.image = undefined;
    try {
        let work = await Request.create({
            type: 'editaccount',
            author,
            details
        });
        return work ? 'Edit request submitted' : 'Error submitting request';
    } catch (error) {
        return Promise.reject(error);
    }
}

async function externalTransfer(author, data = { amount: 0, to: { bank: '', accountName: '', accountNo: '' } }) {
    try {
        const account = await Account.get({ _id: author });
        //convert amount to base currency
        let amount = await global.convert(account.currency, global.currency, data.amount);
        let to = JSON.parse(JSON.stringify(data));
        delete to.amount;
        if (account.balance - amount >= 0) {
            let work = await Request.create({
                type: 'externaltransfer',
                author,
                details: { accountNo: account.accountNo, amount: data.amount, to, currency: account.currency }
            });
            return work ? 'External transfer request submitted' : 'Error submitting request';
        }
        else {
            return Promise.reject("Insufficient fund");
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

async function creditAccount(author = '', data = { amount: 0 }) {
    try {
        const account = await Account.get({ _id: author });
        let work = await Request.create({
            type: 'creditaccount',
            author,
            details: { accountNo: account.accountNo, amount: data.amount, currency: account.currency }
        });
        return work ? 'Credit request submitted' : 'Error submitting request';
    } catch (error) {
        return Promise.reject(error);
    }
}

async function debitAccount(author = '', data = { amount: 0 }) {
    try {
        const account = await Account.get({ _id: author });
        //convert amount to base currency
        let amount = await global.convert(account.currency, global.currency, data.amount);
        if (account.balance - amount >= 0) {
            let work = await Request.create({
                type: 'debitaccount',
                author,
                details: { accountNo: account.accountNo, amount: data.amount, currency: account.currency }
            });
            return work ? 'Debit request submitted' : 'Error submitting request';
        }
        else {
            return Promise.reject("Insufficient fund");
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

async function resolveEditAccount(_id, data) {
    try {
        let done = await Account.update({ _id }, data);
        return done ? "Edit request resolved" : "Error resolving edit request";
    } catch (error) {
        return Promise.reject(error);
    }
}

async function resolveExternalTransfer(accountNo = '', amount = 0, to = { accountNo: '', accountName: '', bank: '' }, currency = '') {
    try {
        let done = await Account.debit(accountNo, amount, `You transfered money to ${to.accountNo} owned by ${to.accountName} in a bank called ${to.bank}`, currency);
        return done ? "Transfer request resolved" : "Error resolving debit request";
    } catch (error) {
        return Promise.reject(error);
    }
}

async function resolveCreditAccount(accountNo = '', amount = 0, currency = '') {
    try {
        let done = await Account.credit(accountNo, amount, `You have been credited money`, currency);
        return done ? "Account credited" : "Error crediting account";
    } catch (error) {
        return Promise.reject(error);
    }
}

async function resolveDebitAccount(accountNo = '', amount = 0, currency = '') {
    try {
        let done = await Account.debit(accountNo, amount, 'You have been debited money', currency);
        return "Account debited";
    } catch (error) {
        return Promise.reject(error);
    }
}

async function get(query, options = { start: 0, end: 1, many: false }) {
    let selectMany = (options.end - options.start) > 1
    options.many = options.many || selectMany;
    try {
        let found = await Request.find(query, options.many);
        if (selectMany) {
            found = found.slice(options.start, options.end);
        }
        return found;
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = {
    resolve,
    request,
    get
}