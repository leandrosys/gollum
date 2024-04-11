const { Sequelize } = require('sequelize');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.database.user);
const PASSWORD = encodeURIComponent(config.database.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.database.host}:${config.database.port}/${config.database.name}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

module.exports = sequelize;
