const UserRouter = require('./user');
const TicketRouter = require('./ticket');
const TroubleshootingRouter = require('./troubleshooting');

class Router {
  static registerUser(request, response) {}
  static loginUser(request, response) {}
  static createTicket(request, response) {}
  static getTickets(request, response) {}
  static updateTicket(request, response) {}
  static deleteTicket(request, response) {}
  static createTroubleshooting(request, response) {}
  static getTroubleshooting(request, response) {}
  static updateTroubleshooting(request, response) {}
  static deleteTroubleshooting(request, response) {}
}

module.exports = Router;
