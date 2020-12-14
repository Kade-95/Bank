const express = require('express');
const middleWares = require('../middlewares');
const accoutRouter = require('./account');
const staffRouter = require('./staff');
const { login, create, find, changePassword } = require('../controllers');
const router = express.Router();

router.get('/rates', middleWares.rates);
router.use(middleWares.sessions);
router.get('/ping/:profile', middleWares.ping);
router.post('/login/:profile', login);
router.post('/create/:profile', create);
router.get('/registration', middleWares.registration)
router.use(middleWares.authenticate);
router.get('/data/:type/:user/:image', middleWares.getImage);
router.get('/find/:collection', find);
router.put('/changepassword', changePassword);
router.use(staffRouter);
router.use(accoutRouter);
router.post('/logout', middleWares.logout);
router.use(middleWares.errorHandler);

module.exports = router;