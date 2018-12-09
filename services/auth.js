const seneca = require("seneca")();

// MICROSERVICES THAT MAKES SOME MATH OPERATIONS
seneca.add({ role: "math", cmd: "sum" }, (msg, reply) => {
  console.log("sum");
  reply(null, { answer: msg.left + msg.right });
});

seneca.add({ role: "math", cmd: "product" }, (msg, respond) => {
  console.log("product");
  const product = msg.left * msg.right;
  respond(null, { answer: product });
});

seneca
  .act({ role: "math", cmd: "sum", left: 1, right: 3 }, console.log)
  .act({ role: "math", cmd: "product", left: 3, right: 4 }, console.log);
