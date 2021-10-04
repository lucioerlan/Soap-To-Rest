const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src');

chai.should();
chai.use(chaiHttp);

describe('Error Route', () => {
  it('Should return a JSON object with invalid route error message', (done) => {
    chai
      .request(server)
      .get('/api')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.errors[0].should.have.property('message').to.contain('Invalid Route');
        done();
      });
  });
});
