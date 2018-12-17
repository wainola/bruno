class Router {
  static testService(request, response) {
    return response.status(200).send({ msg: 'Service is alive!' });
  }
  static authenticate(request, response) {
    // get request body
    // validate request body
    // if valid, pass to handler
    // else, return 422 for malformed json
  }
}
