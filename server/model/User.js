const { Sequelize } = require('sequelize');
const { writerDB, readerDB } = require('../database/Database');

const WriteUser = writerDB.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    dob: {
        type: Sequelize.DATE,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
    },
    bookGenre: {
        type: Sequelize.JSON
    }
});

const ReadUser = readerDB.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        require: true
    },
    dob: {
        type: Sequelize.DATE,
        require: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        require: true
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
    bookGenre: {
        type: Sequelize.JSON
    }
});

module.exports = {
    WriteUser,
    ReadUser
};
