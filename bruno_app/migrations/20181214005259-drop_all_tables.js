'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface
      .dropAllTables()
      .then(() => console.log('DROPING ALL THE TABLES!'))
      .catch(e =>
        console.log('some error ocurred when dropping all the tables', e)
      );
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    const userTable = queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      }
    });
    const ticketsTable = queryInterface.createTable('tickets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      number: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      }
    });
    const troubleshootingTable = queryInterface.createTable(
      'troubleshootings',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        flight_code: {
          type: Sequelize.STRING
        },
        username: {
          type: Sequelize.STRING
        },
        info: {
          type: Sequelize.STRING
        },
        state: {
          type: Sequelize.STRING
        }
      }
    );
    const promises = [
      userTable
        .then(() => console.log('table user created'))
        .catch(e =>
          console.log('some error ocurred when creating the table', e)
        ),
      ticketsTable
        .then(() => console.log('table tickets created'))
        .catch(e =>
          console.log('some error ocurrend when creating tickets table', e)
        ),
      troubleshootingTable
        .then(() => console.log('table troubleshootings created'))
        .catch(e =>
          console.log(
            'some error ocurred when creating troubleshootings table',
            e
          )
        )
    ];
    return Promise.all(promises);
  }
};
