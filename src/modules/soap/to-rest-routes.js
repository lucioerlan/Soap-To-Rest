const router = require('express').Router();
const SoapJsonController = require('./to-rest-controller');
const { validationMiddleware } = require('../../middlewares');
const schemaValidation = require('./to-rest-schema');

const soapJsonController = new SoapJsonController();

router.post('/consultZip', 
 validationMiddleware(schemaValidation), soapJsonController.index);
 
module.exports = router;
