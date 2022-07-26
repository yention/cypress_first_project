const request = require('supertest');
const express = require('express');
const expect = require('chai').expect();

const app = express();

app.get('/first', (err, res) => {
  res.status(200).json({ ok: 'response' });
});

describe('first api test', () => {
  it('ok responde', () => {
    request(app)
      .get('/first')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
      });
  });

  it('Mocky OK response', (done) => {
    request('https://designer.mocky.io').get('').expect(200, done);
  });
});
