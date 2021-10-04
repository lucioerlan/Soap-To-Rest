const chai = require('chai');
const server = require('../../src/index');
const { cep } = require('../fixtures/payload.json');

describe('Consult zip code', () => {
  it('should return with a success', (done) => {
    chai
      .request(server)
      .post('/api/consultZip')
      .send({ cep })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.return.should.have.property('bairro').eql('Calafate');
        res.body.data.return.should.have.property('cep').eql('69914366');
        res.body.data.return.should.have.property('cidade').eql('Rio Branco');
        res.body.data.return.should.have.property('complemento2').eql('');
        res.body.data.return.should.have.property('end').eql('Rua da Amizade');
        res.body.data.return.should.have.property('uf').eql('AC');
        res.body.should.have.property('message').eql('Address found!');
        res.body.should.have.property('status').eql('success');
        done();
      });
  });

  it('should return the correct data type', (done) => {
    chai
      .request(server)
      .post('/api/consultZip')
      .send({ cep })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.return.bairro.should.be.a('string');
        res.body.data.return.cep.should.be.a('string');
        res.body.data.return.cidade.should.be.a('string');
        res.body.data.return.complemento2.should.be.a('string');
        res.body.data.return.end.should.be.a('string');
        res.body.data.return.uf.should.be.a('string');
        res.body.should.have.property('message').eql('Address found!');
        res.body.should.have.property('status').eql('success');
        done();
      });
  });

  it('should return with invalid Cep', (done) => {
    chai
      .request(server)
      .post('/api/consultZip')
      .send({ cep: '000rs0000000' })
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.property('type').eql('ValidationError');
        res.body.should.have.property('message').eql('Cep Inválido, digite apenas números');
        done();
      });
  });
});
