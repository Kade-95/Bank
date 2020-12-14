const { Request } = require('../modules/index');
const ObjectId = require('mongoose').Types.ObjectId;
function create(data) {
    return Request.create(data);
}

function resolve(_id, resolver, value) {
    let data = {
        resolved: true,
        resolveValue: !!value,
        resolvedOn: new Date().getTime(),
        resolver
    };
    return Request.findOneAndUpdate({ _id }, data);
}

async function find(query, many = false) {
    let found;
    if (query._id) query._id = new ObjectId(query._id);
    if (query.author) query.author = new ObjectId(query.author);

    if (many) {
        found = await Request.aggregate([
            { $project: { resolver: 0, resolvedOn: 0, resolveValue: 0, __v: 0, resolvedOn: 0 } },
            { $match: query },
            { $project: { type: 0, resolved: 0 } },
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
            { $project: { account: 0 } },
        ]);

        return found.length ? found : Promise.reject('No request found');
    }
    else {
        found = await Request.aggregate([
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
        ]);
        return !!found.length ? found[0] : Promise.reject('Request not found');
    }
}

module.exports = {
    create,
    find,
    resolve
}