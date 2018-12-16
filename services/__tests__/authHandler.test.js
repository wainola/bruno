const nock = require('nock');
const fetch = require('node-fetch');
const { sendAuthenticatedUser } = require('../helpers/helpers');

const authHandlerURL = 'http://localhost:3000';

describe('AuthHandler', () => {
  it('it receives some user data in form of object and return the same data plus and token key', async () => {
    nock(`${authHandlerURL}`)
      .post('/service-auth')
      .reply(200, sendAuthenticatedUser());

    const response = await fetch(`http://localhost:3000/service-auth`, {
      method: 'POST'
    });

    const toJson = await response.json();
    console.log('toJson', toJson);
  });
});
