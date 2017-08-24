const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const bodyParser = require('body-parser')
const queries = require('../db/queries')

/* GET all books. */
router.get('/', (req, res, next) => {
  queries.getAllBooks()
  .then((books) => {
    res.json(books)
  })
  .catch(error => res.json({ error }) )
})
/* GET book by ID. */
router.get('/:id', (req, res, next) => {
  let id = req.params.id
  queries.getBookByID(id)
  .then((book) => {
    book = book[0]
    queries.getAuthorsByBookID(book.id)
    .then(authors => {
      book.authors = authors
      res.json(book)
    })
  })
  .catch(error => res.json({ error }) )
})

module.exports = router;
