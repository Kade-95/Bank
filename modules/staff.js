const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a user Schema
const StaffSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username field is required'],
        unique: [true, 'Staff with username already exists']
    },
    firstname: {
        type: String,
        default: '',
    },
    middlename: {
        type: String,
        default: '',
    },
    lastname: {
        type: String,
        default: '',
    },
    pwHash: {
        type: String,
        required: [true, 'Password field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: [true, 'Staff with email already exists']
    },
    roles: {
        type: [String],
        default: ['Staff']
    },
    birthdate: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },
    gender: {
        type: String,
        default: '',
    },
    maritalstatus: {
        type: String,
        default: '',
    },
    nationality: {
        type: String,
        default: '',
    },
    religion: {
        type: String,
        default: '',
    },
    image: {
        type: String,
    }
});

const Staff = mongoose.model('staff', StaffSchema);
module.exports = Staff;