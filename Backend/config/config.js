require('dotenv').config({ path: '../config.env' });

//Config DB
const host = process.env.DB_HOST || '127.0.0.1';
const database = process.env.DB || 'courier';
const username = process.env.DB_USERNAME || 'root';
const password = process.env.DB_PASSWORD || 'root';
const dialect = process.env.DB_TYPE || 'postgres';

//Config seeds
const seederStorage = 'sequelize';
const seederStorageTableName = 'seeds';

//Config migrations
const migrationStorage = 'sequelize';
const migrationStorageTableName = 'migrations';


module.exports ={
    host,
    username,
    database,
    password,
    dialect,
    seederStorage,
    seederStorageTableName,
    migrationStorage,
    migrationStorageTableName
}