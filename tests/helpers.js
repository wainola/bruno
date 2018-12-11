const sendMockingTicket = () => ({
  ticket: {
    id: Math.random()
      .toString(36)
      .split('.')
      .join(''),
    flight_code: parseInt(Math.random() * 10, 10),
    username: 'John Doe',
    info: 'Some info',
    ticketCode: Math.random()
      .toString(36)
      .split('.')
      .join('')
  }
});

module.exports = {
  sendMockingTicket
};
