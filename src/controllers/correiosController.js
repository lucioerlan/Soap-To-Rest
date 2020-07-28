//const clientRedis = require('../redis/Redis')
const soap = require('soap');

const consultaCEP = (req, res) => {
  try {
    const { cep } = req.body;

    soap.createClient(process.env.CORREIO_WSDL, (err, client) => {
      if (err) throw new Error(err);

      const args = { cep: cep };

      client.consultaCEP(args, (err, result) => {
        return res.status(200).json(result);
      });

    });

  } catch (err) {
    return res
      .status(500)
      .json({ Message: `OPSS Aconteceu algum erro, ${err}` });
  }
};


module.exports = {
  consultaCEP
};
