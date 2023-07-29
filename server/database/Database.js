
const { Sequelize } = require('sequelize');
const DatabaseConfig = require("../config/DatabaseConfig");

console.log('DB',DatabaseConfig);

const writerDB =  new Sequelize(DatabaseConfig.DB,DatabaseConfig.DB_USER, DatabaseConfig.DB_PASSWORD, {
  host: DatabaseConfig.WRITER_HOST,
  dialect: DatabaseConfig.DIALECT, 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    }
  }
});

const readerDB =  new Sequelize(DatabaseConfig.DB,DatabaseConfig.DB_USER, DatabaseConfig.DB_PASSWORD, {
  host: DatabaseConfig.READER_HOST,
  dialect: DatabaseConfig.DIALECT, 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    }
  }
});

module.exports = {
  writerDB,
  readerDB
}




