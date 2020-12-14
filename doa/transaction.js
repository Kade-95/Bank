const { Transaction } = require('../modules/index');
const ObjectId = require('mongoose').Types.ObjectId;

async function create(data = { author: '', type: '', amount: 0, details: '' }) {
    try {
        let work = await Transaction.create(data);
        return work ? work : Promise.reject('Error creating transaction');
    } catch (error) {
        return Promise.reject(error);
    }
}

async function find(query, many = true) {
    let found;
    if (query._id) query._id = new ObjectId(query._id);
    if (query.author) query.author = new ObjectId(query.author);

    if (many) {
        found = await Transaction.aggregate([
            { $project: { __v: 0 } },
            { $match: query },
            {
                $lookup: {
                    from: "accounts",
                    localField: "author",
                    foreignField: "_id",
                    as: "account"
                }
            },
            { $unwind: '$account' },
            { $addFields: { accountNo: "$account.accountNo", accountName: { $concat: ["$account.firstname", ' ', "$account.middlename", ' ', "$account.lastname"] } } },
            { $project: { account: 0 } }
        ]);
        return found.length ? found : Promise.reject('No transaction found');
    }
    else {
        found = await Transaction.aggregate([
            { $project: { __v: 0 } },
            { $match: query },
            {
                $lookup: {
                    from: "accounts",
                    localField: "author",
                    foreignField: "_id",
                    as: "account"
                }
            },
            { $unwind: '$account' },
            { $addFields: { accountNo: "$account.accountNo", accountName: { $concat: ["$account.firstname", ' ', "$account.middlename", ' ', "$account.lastname"] }, currency: "$account.currency" } },
            { $project: { account: 0 } }
        ]);

        return !!found.length ? found[0] : Promise.reject('Transaction not found');
    }
}

module.exports = {
    create,
    find
}