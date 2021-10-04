const { createClientAsync } = require('soap');
const { logger } = require('../../middlewares');
const { WSDL_URL } = require('../../config/config');

const getAddress = async (cep) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await createClientAsync(WSDL_URL);

      client.consultaCEP(cep, (err, result) => {
        if (err) logger.error(err.message);

        return resolve(result);
      });
    } catch (err) {
      return reject(err.message);
    }
  });
};

module.exports = getAddress;
