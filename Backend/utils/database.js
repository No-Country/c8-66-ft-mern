const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' });

// Create a connection to database
const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
	port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: false,
  dialectOptions:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: { require: true, rejectUnauthorized: false },
        }
      : {},
});

module.exports = { db };
