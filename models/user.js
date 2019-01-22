const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes, unusedParam, config) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  User.associate = function(models) {
    this.belongsTo(models.Institution);
  };


  return User;
};