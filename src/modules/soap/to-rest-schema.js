const Yup = require('yup');
const isValidCep = require('../../utils/functions');

const schemaValidation = Yup.object().shape({
  body: Yup.object({
    cep: Yup.string()
      .test('cep', 'Cep Inválido, digite apenas números',
       (value) => isValidCep(value)).required('Cep é requerido'),
  }),
});

module.exports = schemaValidation;
