const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes, unusedParam, config) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    password: {
      type: DataTypes.STRING,
      set:  function(password) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        if (password.length < 7) throw new Error('Please choose a longer password');
        this.setDataValue('password', hash);
      },
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