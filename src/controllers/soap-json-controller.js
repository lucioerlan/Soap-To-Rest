const { createClientAsync } = require('soap');
const { WSDL_URL } = require('../config/config');
const { logger } = require('../middlewares');

/**
 * The SoapTOjson API.
 *
 * @class Convert Soap to Rest
 * @return Json With The Address
 */

class SoapJsonController {
  async index(req, res) {
    try {
      const cep = req.body;

      const client = await createClientAsync(WSDL_URL);

      client.consultaCEP(cep, (err, result) => {

        if (err) res.status(500).json(err);
        else res.status(200).json(result);
        
      });
    } catch (err) {
      logger.error(err);
    }
  }
}

module.exports = SoapJsonController;
