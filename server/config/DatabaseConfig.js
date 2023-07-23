require("dotenv").config();

module.exports = {
    WRITER_HOST: process.env.WRITER_HOST || "localhost",
    READER_HOST: process.env.READER_HOST || "localhost",
    DIALECT: 'postgres',
    DB: 'postgres',
    DB_USER: process.env.DB_USER || "",
    DB_PASSWORD: process.env.DB_PASSWORD || ""
}

