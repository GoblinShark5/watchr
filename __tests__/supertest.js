/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
const request = require('supertest');
require('regenerator-runtime/runtime');
const app = require('../server/server');

const server = 'http://localhost:3000';

// https://www.npmjs.com/package/supertest
describe('Routes', () => {
  describe('/test', () => {
    describe('GET', () => {
      it('gets the test endpoint', async () => {
        const response = await request(app).get('/test');

        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toBe('Test Response!');
      });
    });
  });

  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', (done) => {
        request(app)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200, done);
      });
    });
    describe('POST', () => {
      it('responds to unknown method with 404 status', (done) => {
        request(app)
          .post('/')
          .expect(404, done);
      });
    });
  });

  describe('/user', () => {
    // fill in user endpoints here
  });
});
