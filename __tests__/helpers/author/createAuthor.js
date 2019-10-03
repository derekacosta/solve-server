const mongoose = require('mongoose');
const faker = require('faker');

const AuthorModel = require('../../../src/models/Author');
const fakeAuthor = require('./fakeAuthor');

const Author = mongoose.model('Author');

const createSingleAuthor = () => Author.create(fakeAuthor);

const createMultipleAuthors = async (numberOfAuthors) => {
  const authors = await Promise.all(
    Array(numberOfAuthors)
      .fill({})
      .map(() => createSingleAuthor()),
  );

  return authors;
};

module.exports = {
  createMultipleAuthors,
  createSingleAuthor,
};
