/*
  Config para usar la conexión de la BD en .sequelize de las migration, dado que se usa la cli de sequelize
*/
const { config } = require('../config/config');

const USER = encodeURIComponent(config.database.user);
const PASSWORD = encodeURIComponent(config.database.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.database.host}:${config.database.port}/${config.database.name}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
