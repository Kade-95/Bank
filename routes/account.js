const express = require('express');
const { Account } = require('../controllers');

const accountRouter = express.Router();
accountRouter.post('/account/transfer', Account.transfer);
accountRouter.post('/account/request/:type', Account.request);
accountRouter.put('/account/freeze/:_id', Account.freeze);
accountRouter.put('/account/unfreeze/:_id', Account.unFreeze);
accountRouter.delete('/account/:_id', Account.remove);
accountRouter.get('/transferaccount/:number', Account.getAccountsForTransfer);
module.exports = accountRouter;