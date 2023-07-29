CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR NOT NULL,
    dob DATE NOT NULL,
    email VARCHAR NOT NULL,
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE IF NOT EXISTS logs (
    id SERIAL PRIMARY KEY NOT NULL,
    userId INTEGER NOT NULL,
    bookId INTEGER NOT NULL,
    createdAt DATE,
    updatedAt DATE
);

