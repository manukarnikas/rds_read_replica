const { Sequelize } = require('sequelize');
const { writerDB, readerDB } = require('../database/Database');

const WriteBook = writerDB.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    }
});

const ReadBook = readerDB.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    }
});

module.exports = {
    WriteBook,
    ReadBook
};
