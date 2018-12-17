const AuthHandler = require('../handlers/auth');
class AuthRouter {
  static authenticate(response, body) {
    const result = AuthHandler.authenticate(body);
    return response.status(200).send({ auth: true, data: body });
  }
}

module.exports = AuthRouter;
