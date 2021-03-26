const app = require('../server/server.js');
const request = require('supertest');

describe('testing endpoints', () => {

  it('GET all the challenges', done => {
    request(app)
      .get('/challenges')
      .then( res => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('GET a random challenge', done => {
    request(app)
      .get('/random/challenge')
      .then( res => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('GET a random question by type', done => {
    request(app)
      .get('/random/challenge/:type')
      .then( res => {
        expect(res.status).toBe(200);
        done();
      });
  });

});

describe('testing error', () => {

  it('send an 404 message', done => {
    request(app)
      .get('/random/challeng')
      .then( res => {
        expect(res.status).toBe(404);
        expect(res.body.message).toBe('Cannot find the page your looking for');
        done();
      });
  });

});
