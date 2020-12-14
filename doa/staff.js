const bcrypt = require('bcrypt');
const { Staff } = require('../modules/index');
const ObjectId = require('mongoose').Types.ObjectId;

async function create(data) {
    data.pwHash = await bcrypt.hash(data.password, 10);
    delete data.password;
    let created = await Staff.create(data);
    return created ? created : Promise.reject('Staff not created');
}

async function update(query, data) {
    if (data.image) {
        data.image = await global.storeImage(data.user, 'staff', data.image);
    }
    await Staff.findOneAndUpdate(query, data);

    let updated = await Staff.findOne(query);
    return updated ? updated : Promise.reject('Staff not found');
}

async function find(query, many = false) {
    let found;
    if (many) {
        found = await Staff.aggregate([
            { $project: { roles: 0, pwHash: 0, __v: 0 } },
            { $match: query },
            {
                $addFields:
                    { staffName: { $concat: ["$firstname", ' ', "$middlename", ' ', "$lastname"] } }
            }
        ]);

        return found.length ? found : Promise.reject('No staff found');
    }
    else {
        if (query._id) query._id = new ObjectId(query._id);
        found = await Staff.aggregate([
            { $project: { __v: 0 } },
            { $match: query },
            {
                $addFields:
                    { staffName: { $concat: ["$firstname", ' ', "$middlename", ' ', "$lastname"] } }
            },
        ]);

        return !!found.length ? found[0] : Promise.reject('Staff not found');
    }
}

async function remove(query) {
    let work = await Staff.findOneAndDelete(query);
    return work ? work : Promise.reject('Error removing staff');
}

module.exports = {
    create,
    update,
    find,
    remove
}