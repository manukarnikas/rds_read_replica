
const { Sequelize } = require('sequelize');
const DatabaseConfig = require("../config/DatabaseConfig");

const writerDB =  new Sequelize(DatabaseConfig.DB,DatabaseConfig.DB_USER, DatabaseConfig.DB_PASSWORD, {
  host: DatabaseConfig.WRITER_HOST,
  dialect: DatabaseConfig.DIALECT, 
});

const readerDB =  new Sequelize(DatabaseConfig.DB,DatabaseConfig.DB_USER, DatabaseConfig.DB_PASSWORD, {
  host: DatabaseConfig.READER_HOST,
  dialect: DatabaseConfig.DIALECT, 
});

module.exports = {
  writerDB,
  readerDB
}




