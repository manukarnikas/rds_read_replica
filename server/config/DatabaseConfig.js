require("dotenv").config();

module.exports = {
    WRITER_HOST: process.env.WRITER_HOST || "",
    READER_HOST: process.env.READER_HOST || "",
    DIALECT: 'postgres',
    DB: 'postgres',
    DB_USER: process.env.DB_USER || "",
    DB_PASSWORD: process.env.DB_PASSWORD || ""
}

