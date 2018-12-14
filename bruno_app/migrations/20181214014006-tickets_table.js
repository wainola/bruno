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
      .createTable('tickets', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false
        },
        flight_code: {
          type: Sequelize.STRING,
          allowNull: false
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: 'TIMESTAMP',
          allowNull: false
        },
        updatedAt: {
          type: 'TIMESTAMP',
          allowNull: false
        },
        deletedAt: {
          type: 'TIMESTAMP',
          allowNull: false
        }
      })
      .then(() => console.log('success on creating tickets table'))
      .catch(e =>
        console.log('some error ocurred when creating tickets table', e)
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface
      .dropTable('tickets')
      .then(() => console.log('success on removing tickets table'))
      .catch(e =>
        console.log('some error ocurred when removing tickets table', e)
      );
  }
};
