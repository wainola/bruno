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
      .addColumn('troubleshootings', 'state', { type: Sequelize.STRING })
      .then(() => console.log('adding state column to troubleshootings table'))
      .catch(e =>
        console.log('some error ocurred on troubleshootings table', e)
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
      .removeColumn('troubleshootings', 'state')
      .then(() =>
        console.log('removing state column on troubleshootings table')
      )
      .catch(e =>
        console.log('some error ocurred when removing the column, e')
      );
  }
};
