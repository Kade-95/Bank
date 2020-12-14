const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a history Schema
const HistorySchema = new Schema({
    type: {
        type: String,
        required: [true, 'Type field is required']
    },
    action: {
        type: String,
        required: [true, 'Action field is required']
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
        default: {}
    },
});

const History = mongoose.model('history', HistorySchema);
module.exports = History;