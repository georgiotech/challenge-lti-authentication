module.exports = function (sequelize, DataTypes) {
    const Institution = sequelize.define('Institution', {
      name: {
        type: DataTypes.STRING(32),
        allowNull: false,
        primaryKey: true,
      },
    });
    Institution.associate = function(models) {
      this.hasMany(models.LTIConsumer);
      this.hasMany(models.User);
    };
    return Institution;
  };
  