const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (sqlitePath = './example.db') => {
  const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  
    storage: sqlitePath
  });

  const models = {};

  // require each file in this directory and store it into the `models` variables to be exported as a single object
  fs.readdirSync(__dirname)
    .filter(file => file.includes('.js') && file !== 'index.js')
    .forEach(file => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      models[model.name] = model;
    });

  Object.keys(models).forEach(name => {
    const model = models[name];
    if ('associate' in model) { model.associate(models); }
  });

  return models;
}
