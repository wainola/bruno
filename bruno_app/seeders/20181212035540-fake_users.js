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
      queryInterface
        .bulkInsert('users', [
          { name: 'john', lastname: 'doe', role: 'user', age: '33' },
          { name: 'jane', lastname: 'done', role: 'admin', age: '35' }
        ])
        .then(() => console.log('success on users insertion'))
        .catch(e => console.log('some error ocurred on users insertion', e)),
      queryInterface
        .bulkInsert('troubleshootings', [
          {
            flight_code: Math.random()
              .toString(36)
              .split('.')
              .join(),
            username: 'wainola',
            info: 'tickter is overpriced',
            state: 'PENDING'
          },
          {
            flight_code: Math.random()
              .toString(36)
              .split('.')
              .join(),
            username: 'nrriquel',
            info: 'tickter is not in the correct format',
            state: 'PENDING'
          }
        ])
        .then(() => console.log('success on inserting troubleshootings data'))
        .catch(e =>
          console.log('some error ocurred on troubleshootings insertion', e)
        ),
      queryInterface
        .bulkInsert('tickets', [
          {
            number: parseInt(Math.random() * 100, 10),
            city: 'santiago',
            date: Date.now()
          },
          {
            number: parseInt(Math.random() * 100, 10),
            city: 'chiloe',
            date: Date.now()
          }
        ])
        .then(() => console.log('success on inserting tickets data'))
        .catch(e => console.log('some error ocurred on ticket insertion', e))
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
      queryInterface
        .bulkDelete('users', null, {})
        .then(() => console.log('success on deleting seeded data'))
        .catch(e => console.log('some error ocurred on deletion')),
      queryInterface
        .bulkDelete('tickets', null, {})
        .then(() => console.log('success on deleting seeded data'))
        .catch(e => console.log('some error ocurred on deletion')),
      queryInterface
        .bulkDelete('troubleshootings', null, {})
        .then(() => console.log('success on deleting seeded data'))
        .catch(e => console.log('some error ocurred on deletion'))
    ];

    return Promise.all(promises);
  }
};
