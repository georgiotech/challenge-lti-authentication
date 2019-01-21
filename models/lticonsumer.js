module.exports = (sequelize, Types) => {
  const LTIConsumer = sequelize.define('LTIConsumer', {
    id: {
      type: Types.STRING(32),
      allowNull: false,
      primaryKey: true,
    },
    oauth_consumer_key: {
      type: Types.STRING,
      allowNull: false,
    },
    oauth_consumer_secret: {
      type: Types.STRING,
      allowNull: false,
    },
  });

  LTIConsumer.associate = function(models) {
    this.belongsTo(models.Institution);
  };

  return LTIConsumer;
};