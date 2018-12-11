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
      .renameTable('users_tables', 'users')
      .then(() => console.log('success on renaming the table'))
      .catch(e => console.log('some error ocurred when renaming the table', e));
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface
      .renameTable('users', 'users_tables')
      .then(() => console.log('restoring the original table name'))
      .catch(e =>
        console.log(
          'some error ocurred when restoring the original table name',
          e
        )
      );
  }
};
