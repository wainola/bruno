const jwt = require('jsonwebtoken');
const signJWT = jwt.sign({ foo: 'bar' }, 'baaar');
const sendAuthenticatedUser = async () => ({
  user: {
    id: 'some_id',
    name: 'John',
    lastname: 'Doe',
    age: 33,
    role: 'USER',
    token: signJWT
  }
});

module.exports = {
  sendAuthenticatedUser
};
