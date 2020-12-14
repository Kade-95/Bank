const { History } = require('../modules/index');

async function create(data = { author: '', type: '', item: '', action: '', details: {} }) {
    try {
        let work = await History.create(data);
        return work ? work : Promise.reject('Error creating history');
    } catch (error) {
        return Promise.reject(error);
    }
}

async function find(query, many = true) {
    let found;
    if (many) {
        found = await History.find(query);
        return found.length ? found : Promise.reject('No history found');
    }
    else {
        found = await History.findOne(query);
        return found ? found : Promise.reject('History not found');
    }
}

module.exports = {
    create,
    find
}