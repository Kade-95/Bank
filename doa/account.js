const bcrypt = require('bcrypt');
const { Account } = require('../modules/index');
const ObjectId = require('mongoose').Types.ObjectId;
async function create(data) {
    let generate = async () => {
        let list = '0123456789', random, existing;
        try {
            do {
                random = '';
                for (let i = 0; i < 10; i++) {
                    random += list[Math.floor(Math.random() * 10)];
                }
                existing = !!await Account.findOne({ accountNo: random });
            } while (existing);
            return random;
        } catch (error) {
            return Promise.reject(error);
        }
    }
    data.pwHash = await bcrypt.hash(data.password, 10);
    delete data.password;
    data.accountNo = await generate();
    let created = await Account.create(data);
    return created ? created : Promise.reject('Account not created');
}

async function update(query, data) {
    await Account.findOneAndUpdate(query, data);

    let updated = await Account.findOne(query);
    return updated ? updated : Promise.reject('Account not found');
}

async function find(query, many = false) {
    let found;
    if (many) {
        found = await Account.aggregate([
            { $project: { roles: 0, balance: 0, currency: 0, pwHash: 0, __v: 0 } },
            { $match: query },
            {
                $addFields:
                    { accountName: { $concat: ["$firstname", ' ', "$middlename", ' ', "$lastname"] } }
            }
        ]);

        return found.length ? found : Promise.reject('No account found');
    }
    else {
        if (query._id) query._id = new ObjectId(query._id);
        found = await Account.aggregate([
            { $project: { __v: 0 } },
            { $match: query },
            {
                $addFields:
                    { accountName: { $concat: ["$firstname", ' ', "$middlename", ' ', "$lastname"] } }
            },
        ]);

        return !!found.length ? found[0] : Promise.reject('Account not found');
    }
}

async function remove(query) {
    let work = await Account.findOneAndDelete(query);
    return work ? work : Promise.reject('Error deleting account');
}

module.exports = {
    create,
    update,
    find,
    remove
}