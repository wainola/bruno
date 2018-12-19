class UserRouter {
  static registerUser(response, user) {
    return response.status(200).send(true);
  }
  static loginUser(response, user) {
    return response.status(200).send(true);
  }
}

module.exports = UserRouter;
