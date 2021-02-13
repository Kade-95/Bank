const express = require('express');
const router = require('./routes');
const request = require('request');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/app/public`));
app.use(express.static(`${__dirname}/app/public/admin`));
app.use(router);

global.rates;
global.currency = 'NGN';

global.convert = async function (from, to, amount) {
    try {
        let value = amount;
        if (rates) {
            value = (amount / global.rates[from]) * global.rates[to];
        }
        return value;
    } catch (error) {
        return Promise.reject(error);
    }
}

global.storeImage = function (user, type, image) {
    let base64Image = image.split(';base64,').pop();
    let path = `data/${type}/${user}`;
    createPath(path);

    path = `${path}/image.png`;
    fs.writeFileSync(path, base64Image, { encoding: 'base64' });
    return path;
}

function createPath(path) {
    path = path.split('/');
    let current = '';
    for (let p of path) {
        current += `${p}/`;
        try {
            let stat = fs.statSync(current);
            if (!stat.isDirectory) {
                fs.mkdirSync(current);
            }
        } catch (error) {
            if (error.code == 'ENOENT') {
                fs.mkdirSync(current);
            }
        }
    }
}

function resetRates() {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: 'https://currencyapi.net/api/v1/rates?key=inaQSsc0fyCng45pgjCIpIONPbCkiotwtgfw&base=USD',
        }, function (err, response, body) {
            if (err) {
                fs.readFile(`${__dirname}/data/rates.json`, (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                });
            }
            else {
                fs.writeFile('./data/rates.json', body, (err, data) => {
                    if (err) reject(err);
                    resolve(body);
                });
            }
        });
    })
}

function init(callback) {
    const Staff = require('./doa/staff');
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bank', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Error connecting to MongoDb'));
    db.once('open', async () => {
        console.log('Connected');
        try {
            await Staff.find({ roles: { '$in': ['Admin'] } });
            callback();
        } catch (error) {
            if (error) {
                Staff.create({
                    username: process.env.ADMIN_USERNAME || '@admin',
                    email: process.env.ADMIN_EMAIL || 'admin@mail.com',
                    password: process.env.ADMIN_PASSWORD || 'admin@1234',
                    roles: ['Staff', 'Admin']
                })
                    .then(admin => {
                        callback();
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    });
}

init(async () => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port - ${port} http://localhost:${port}`));
    global.rates = JSON.parse(await resetRates()).rates;
    setInterval(async () => {
        global.rates = JSON.parse(await resetRates()).rates;
    }, 1000 * 60 * 60);
});
