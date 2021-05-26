/* eslint-disable no-undef */
const request = require('supertest');

const server = 'http://localhost:3000';

// eslint-disable-next-line no-undef
describe('Route integration', () => {
  describe('GET Homepage', () => {
    it('responds with 200 status and text/html content type', () =>
      request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
  });
  describe('GET Unknown Page', () => {
    it('responds with 404 status and text/html content type', () =>
      request(server)
        .get('/Lawrence')
        .expect('Content-Type', /text\/html/)
        .expect(404));
  });
});
