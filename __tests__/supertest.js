/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
const request = require('supertest');

const server = 'http://localhost:3000';

describe('Routes', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/user', () => {

  });
});
