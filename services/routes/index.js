const Joi = require('joi');
const { authSchema } = require('../validators/index');
const AuthRouter = require('../routes/auth');

class Router {
  static testService(request, response) {
    return response.status(200).send({ msg: 'Service is alive!' });
  }
  static authenticate(request, response) {
    const { body } = request;
    const isValidJSON = Joi.validate(body, authSchema);
    console.log('isValid', isValidJSON);
    if (isValidJSON.error !== null) {
      return response.status(422).send({ msg: 'Malformed JSON' });
    }
    return AuthRouter.authenticate(response, body);
  }
}

module.exports = Router;
