/**
 *  valid is cep
 * @function isValidCep
 */

const isValidCep = (cep) => {
  return isCEP = /^\d{8}$/.test(cep);
};

module.exports = isValidCep;
