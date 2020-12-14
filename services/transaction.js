const Transaction = require('../doa/transaction');

async function get(query, options = { start: 0, end: 1, many: false }) {
    let selectMany = (options.end - options.start) > 1
    options.many = options.many || selectMany;
    try {
        let found = await Transaction.find(query, options.many);
        if (selectMany) {
            found = found.slice(options.start, options.end);
        }
        return found;
    } catch (error) {
        return Promise.reject(error);
    }
}

async function add(data = { author: '', type: '', details: '', amount: 0, currency: '', balance: 0 }) {
    try {
        let work = await Transaction.create(data);
        return work;
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = { get, add };