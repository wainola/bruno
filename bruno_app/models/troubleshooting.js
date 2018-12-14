'use strict';
module.exports = (sequelize, DataTypes) => {
  const troubleshooting = sequelize.define('troubleshooting', {
    flight_code: DataTypes.STRING,
    user: DataTypes.STRING,
    info: DataTypes.STRING
  }, {});
  troubleshooting.associate = function(models) {
    // associations can be defined here
  };
  return troubleshooting;
};