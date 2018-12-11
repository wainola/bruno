const assert = require('assert');
const expect = require('chai').expect;
const nock = require('nock');
const fetch = require('node-fetch');
const { sendMockingTicket } = require('./helpers');

const TroubleshootingHandler = require('../handlers/troubleshooting');

describe('Troubleshooting handler', () => {
  it('creates a fligth ticket and check that the returned objet has the proper keys', async () => {
    const expectedKeys = [
      'id',
      'flight_code',
      'username',
      'info',
      'state',
      'ticketCode'
    ];
    nock('http://localhost:9000')
      .post('/api/v1/troubleshooting')
      .reply(200, sendMockingTicket());

    const response = await fetch(
      'http://localhost:9000/api/v1/troubleshooting',
      {
        method: 'POST'
      }
    );
    const toJson = await response.json();
    const keys = Object.keys(toJson.ticket);
    expect(keys).to.eql(expectedKeys);
  });
});
