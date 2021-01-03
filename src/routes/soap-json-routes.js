const router = require('express').Router();

const SoapJsonController = require('../controllers/soap-json-controller');

const soapJsonController = new SoapJsonController();

router.post('/consultZip', soapJsonController.index);

module.exports = router;
