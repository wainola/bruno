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
      .createTable('troubleshootings', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false
        },
        info: {
          type: Sequelize.STRING,
          allowNull: false
        },
        state: {
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
      .then(() => console.log('sucess on creating troubleshootings table'))
      .catch(e =>
        console.log(
          'some error ocurred when creating troubleshootings table',
          e
        )
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
      .dropTable('troubleshootings')
      .then(() => console.log('success on removing troubleshootings table'))
      .catch(e =>
        console.log(
          'some error ocurred when removing troubleshootings table',
          e
        )
      );
  }
};
