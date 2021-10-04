/**
 *  valid is cep
 * @function isValidCep
 */

const isValidCep = (cep) => {
  const isCEP = /^[0-9]{8}$/.test(cep);

  return isCEP;
};

module.exports = isValidCep;
