const Util = require('../../utils/Utils');
const getAddress = require('./to-rest-models');

const util = new Util();

/**
 * The SoapTOjson API.
 *
 * @class Soap to Rest
 * @return Json With The Address
 */

 class SoapJsonController {
  async index(req, res) {
    try {
      const cep = req.body;

      const data = await getAddress(cep);

      if (data) {
        util.setSuccess(200, 'Address found!', data);
      } else {
        util.setError(400, `${cep} Does not exist!`);
      }

      return util.send(res);
    } catch (err) {
      util.setError(500, err.message);
      return util.send(res);
    }
  }
}

module.exports = SoapJsonController;
