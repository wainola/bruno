module.exports = function mathService(options) {
  console.log('seneca!!!');
  this.add('role:math,cmd:sum', function(msg, respond) {
    respond(null, { answer: msg.left + msg.right });
  });

  this.add('role:math,cmd:product', function(msg, respond) {
    respond(null, { answer: msg.left * msg.right });
  });

  this.wrap('role:math', function(msg, respond) {
    msg.left = Number(msg.left).valueOf();
    msg.right = Number(msg.right).valueOf();
    this.prior(msg, respond);
  });
};
