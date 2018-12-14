'use strict';
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define('ticket', {
    number: DataTypes.STRING,
    city: DataTypes.STRING,
    date: DataTypes.STRING
  }, {});
  ticket.associate = function(models) {
    // associations can be defined here
  };
  return ticket;
};