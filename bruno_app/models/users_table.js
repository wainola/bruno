'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_table = sequelize.define('users_table', {
    name: DataTypes.STRING
  }, {});
  users_table.associate = function(models) {
    // associations can be defined here
  };
  return users_table;
};