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
      .createTable('users', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        age: {
          type: Sequelize.STRING,
          allowNull: false
        },
        role: {
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
      .then(() => console.log('success on creating users table'))
      .catch(e =>
        console.log('some error ocurred when creating users table', e)
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
      .dropTable('users')
      .then(() => console.log('success on removing users table'))
      .catch(e =>
        console.log('some error ocurred when removing users table', e)
      );
  }
};
