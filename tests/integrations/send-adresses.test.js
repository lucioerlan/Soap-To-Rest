const request = require('supertest');
const { SucessAdresses, ErrorAdresses } = require('../fixtures/adresses');
const app = require('../../server');

describe('consultZip success', () => {
  it('Must return 200 when zip exists', (done) => {
    request(app)
      .post('/api/consultZip')
      .send(SucessAdresses)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('consultZip error', () => {
  it('Must return 500 when the zip code does not exists', (done) => {
    request(app)
      .post('/api/consultZip')
      .send(ErrorAdresses)
      .set('Accept', 'application/json')
      .expect(500, done);
  });
});
