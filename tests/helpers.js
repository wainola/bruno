const sendMockingTicket = () => ({
  ticket: {
    id: Math.random()
      .toString(36)
      .split('.')
      .join(''),
    flight_code: parseInt(Math.random() * 10, 10),
    username: 'John Doe',
    info: 'Some info',
    state: 'PENDING',
    ticketCode: Math.random()
      .toString(36)
      .split('.')
      .join('')
  }
});

const sendMockingUser = () => ({
  id: Math.random()
    .toString(36)
    .split('.')
    .join(''),
  name: 'John',
  lastname: 'Doe',
  role: 'user',
  age: '33'
});

module.exports = {
  sendMockingTicket,
  sendMockingUser
};
