const mathService = require('./services/auth');
require('seneca')()
  .use(mathService)
  .listen();
