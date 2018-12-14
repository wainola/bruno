const expect = require('chai').expect;
const nock = require('nock');
const fetch = require('node-fetch');
const { sendMockingUser } = require('./helpers');

describe('User handler', () => {
  it('creates an user', async () => {
    const expectedKeys = ['id', 'name', 'lastname', 'role', 'age'];

    nock('http://localhost:9000')
      .post('/api/v1/register')
      .reply(200, sendMockingUser());

    const response = await fetch('http://localhost:9000/api/v1/register', {
      method: 'POST'
    });

    const toJson = await response.json();
    const keys = Object.keys(toJson);
    expect(keys).to.eql(expectedKeys);
  });
});
