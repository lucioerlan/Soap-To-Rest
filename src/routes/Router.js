const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const spec = fs.readFileSync(path.join(__dirname, '../doc/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

const Controllermaplink = require('../controllers/maplinkController'); 
const correiosController = require('../controllers/correiosController');



router.post('/getAddress', Controllermaplink.getAddress);
router.post('/findCity', Controllermaplink.findCity);
router.post('/consultaCEP', correiosController.consultaCEP);


swaggerTools.initializeMiddleware(swaggerDoc,  (middleware) => {
  // Serve the Swagger documents and Swagger UI
  router.use(middleware.swaggerUi());
});


module.exports = router;


