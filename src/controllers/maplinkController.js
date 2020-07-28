//const clientRedis = require('../redis/Redis')
const soap = require('soap');

const getAddress = (req, res) => {
  try {
    const { x, y } = req.body;

    soap.createClient(process.env.MAPLINK_WSDL, (err, client) => {
      if (err) throw new Error(err);

      const args = {
        point: { x: x, y: y },
        token: process.env.TOKEN_MAP_LINK,
      };

      client.getAddress(args, (err, result) => {
        return res.status(200).json(result);
      });

    });

  } catch (err) {
    return res
      .status(500)
      .json({ Message: `OPSS Aconteceu algum erro, ${err}` });
  }
};


const findCity = (req, res) => {
  try {
    const { name, state } = req.body;

    soap.createClient(process.env.MAPLINK_WSDL, (err, client) => {
      
      if (err) throw new Error(err);

      const args = {
        cidade: { name: name, state: state },
        token: process.env.TOKEN_MAP_LINK
      };

      client.findCity(args, (err, result) => {
        if(err) return console.log(err);
        console.log(result);
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
  getAddress,
  findCity
};
