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
module.exports = {
  getAllAuthors,
  getAuthorByID,
  getAllBooks,
  getBookByID
}
