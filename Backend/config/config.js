require('dotenv').config({path:'../config.env'});

//Config DB
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME || 'root';
const database = process.env.DB;
const password = process.env.DB_PASSWORD;
const dialect = process.env.DB_TYPE;

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