const express = require('express');
const { Staff } = require('../controllers');

const staffRouter = express.Router();

staffRouter.put('/staff/resolve', Staff.resolve);
staffRouter.put('/staff/edit', Staff.edit);
staffRouter.delete('/staff/:_id', Staff.remove);
staffRouter.get('/unresolved', Staff.unResolved);
module.exports = staffRouter;