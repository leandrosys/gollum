require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  database: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    name: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
  },
};

module.exports = { config };
