'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const promises = [
      queryInterface.bulkInsert('users', [
        { name: 'john', lastname: 'doe', role: 'user', age: '33' },
        { name: 'jane', lastname: 'done', role: 'admin', age: '35' }
      ]),
      queryInterface.bulkInsert('troubleshootings', [
        {
          flight_code: Math.random()
            .toString(36)
            .split('.')
            .join(),
          username: 'wainola',
          info: 'tickter is overpriced',
          sate: 'PENDING'
        },
        {
          flight_code: Math.random()
            .toString(36)
            .split('.')
            .join(),
          username: 'nrriquel',
          info: 'tickter is not in the correct format',
          sate: 'PENDING'
        }
      ]),
      queryInterface.bulkInsert('tickets', [
        {
          number: parseInt(Math.random() * 100, 10),
          city: 'santiago',
          date: Date.now()
        },
        {
          numner: parseInt(Math.random() * 100, 10),
          city: 'chiloe',
          date: Date.now()
        }
      ])
    ];

    return Promise.all(promises);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    const promises = [
      queryInterface.bulkDelete('users', null, {}),
      queryInterface.bulkDelete('tickets', null, {}),
      queryInterface.bulkDelete('troubleshootings', null, {})
    ];

    return Promise.all(promises);
  }
};
