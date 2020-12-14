const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a history Schema
const RequestSchema = new Schema({
    type: {
        type: String,
        required: [true, 'Type field is required']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Author field is required']
    },
    time: {
        type: String,
        default: new Date().getTime()
    },
    details: {
        type: Object,
        required: [true, 'Details field is required'],
    },
    resolved: {
        type: Boolean,
        default: false
    },
    resolver: {
        type: mongoose.Schema.Types.ObjectId
    },
    resolvedOn: {
        type: String
    },
    resolveValue: {
        type: Boolean
    }
});

const Request = mongoose.model('request', RequestSchema);
module.exports = Request;