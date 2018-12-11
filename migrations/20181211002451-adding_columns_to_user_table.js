'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const promises = [
      queryInterface
        .addColumn('users', 'lastname', { type: Sequelize.STRING })
        .then(() =>
          console.log('success on adding the new column on user table')
        )
        .catch(e => console.log('some error ocurred', e)),
      queryInterface
        .addColumn('users', 'role', { type: Sequelize.STRING })
        .then(() =>
          console.log('success on adding the new column on user table')
        )
        .catch(e => console.log('some error ocurred', e)),
      queryInterface
        .addColumn('users', 'age', { type: Sequelize.STRING })
        .then(() =>
          console.log('success on adding the new column on user table')
        )
        .catch(e => console.log('some error ocurred', e))
    ];
    return Promise.all(promises);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    const promises = [
      queryInterface
        .removeColumn('users', 'lastname', { type: Sequelize.STRING })
        .then(() =>
          console.log('success on adding the new column on user table')
        )
        .catch(e => console.log('some error ocurred', e)),
      queryInterface
        .removeColumn('users', 'role', { type: Sequelize.STRING })
        .then(() =>
          console.log('success on adding the new column on user table')
        )
        .catch(e => console.log('some error ocurred', e)),
      queryInterface
        .removeColumn('users', 'age', { type: Sequelize.STRING })
        .then(() =>
          console.log('success on adding the new column on user table')
        )
        .catch(e => console.log('some error ocurred', e))
    ];

    return Promise.all(promises);
  }
};
