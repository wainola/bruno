const nock = require('nock');
const fetch = require('node-fetch');
const { sendAuthenticatedUser } = require('../helpers/helpers');
const AuthHandler = require('../handlers/auth');

const authHandlerURL = 'http://auth_service:3000';

const fakeResponse = {
  status: function() {
    return 200;
  },
  send: function() {
    return { auth: true };
  }
};

describe('AuthHandler', () => {
  it('it calls the authHandler method and must return a promise', async () => {
    const r = await AuthHandler.authenticate({}, fakeResponse, {});
    console.log('r::', r);
  });
  it('receives some user data in form of object and return the same data plus and token key', async () => {
    const fakeUserWithJWT = await sendAuthenticatedUser();
    const expectedKeys = ['id', 'name', 'lastname', 'age', 'role', 'token'];
    nock(authHandlerURL)
      .post('/service-auth')
      .reply(200, fakeUserWithJWT);

    const response = await fetch(`${authHandlerURL}/service-auth`, {
      method: 'POST'
    });
    const toJson = await response.json();
    const objectKeys = Object.keys(toJson.user);
    expect(objectKeys).toEqual(expectedKeys);
  });
});
