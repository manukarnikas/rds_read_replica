const { WriteBook, ReadBook } = require("../model/Book");

const addBook = async (data) => {
  try {
    const result = await WriteBook.create(data);
    return result;
  } catch (err) {
    throw err;
  }
};

const getBook = async (id) => {
  try {
    const result = await ReadBook.findByPk(id);
    if (!result) {
      throw new Error('Book not found');
    }
    return result;
  } catch (err) {
    throw err;
  }
};

const updateBook = async (id,data) => {
  try {
    const book = await WriteBook.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }
    const result = await book.update(data,{
      returning: true,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

const deleteBook = async (id) => {
  try {
    const book = await WriteBook.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }
    await book.destroy();
    return;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addBook,
  getBook,
  updateBook,
  deleteBook
};
