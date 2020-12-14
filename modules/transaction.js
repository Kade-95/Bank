const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a history Schema
const TransactionSchema = new Schema({
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
    amount: {
        type: Number,
        required: [true, 'Amount field is required']
    },
    details: {
        type: String,
        required: [true, 'Details field is required']
    },
    balance: {
        type: Number,
        required: [true, 'Balance field is required']
    },
    currency: {
        type: String,
        required: [true, 'Currency field is required']
    }
});

const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = Transaction;