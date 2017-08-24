const knex = require('../db/connection');

function getAllAuthors() {
  return knex('author')
}

function getAuthorByID(id) {
  return knex('author')
  .where('id', id)
}

function getAllBooks() {
  return knex('book')
}

function getBookByID(id) {
  return knex('book')
  .where('id', id)
}

function getAuthorsByBookID(book_id) {
  return knex('book')
  .select('author.*')
  .join('author_book', 'book.id', 'author_book.book_id')
  .join('author', 'author.id', 'author_book.author_id')
  .where('book.id', book_id)
}
module.exports = {
  getAllAuthors,
  getAuthorByID,
  getAllBooks,
  getBookByID,
  getAuthorsByBookID
}
