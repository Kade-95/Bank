const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a user Schema
const AccountSchema = new Schema({
    accountNo: {
        type: String,
        required: [true, 'Accountno field is required']
    },
    firstname: {
        type: String,
        default: ''
    },
    middlename: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: ''
    },
    religion: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    maritalstatus: {
        type: String,
        default: ''
    },
    nationality: {
        type: String,
        default: ''
    },
    passportno: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        required: [true, 'Username field is required'],
        unique: [true, 'Account with username already exists']
    },
    pwHash: {
        type: String,
        required: [true, 'Password field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: [true, 'Account with email already exists']
    },
    roles: {
        type: [String],
        default: ['Account']
    },
    balance: {
        type: Number,
        default: 0
    },
    currency: {
        type: String,
        default: 'NGN'
    },
    frozen: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
    },
    sortcode: {
        type: String,
        default: ''
    },
    accountType: {
        type: String,
        default: 'Savings'
    },
    birthdate: {
        type: String,
        default: ''
    }
});

const Account = mongoose.model('account', AccountSchema);
module.exports = Account;