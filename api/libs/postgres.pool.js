const { Pool } = require('pg');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.database.user);
const PASSWORD = encodeURIComponent(config.database.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.database.host}:${config.database.port}/${config.database.name}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
