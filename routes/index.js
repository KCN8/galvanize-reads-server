const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const bodyParser = require('body-parser')

/* GET all authors. */
router.get('/authors', (req, res) => {
  knex('author')
  .then((authors) => {
    res.send(authors)
  })
})

router.get('/authors/:id', (req, res) => {
  let id = req.params.id
  knex('author')
  .where('id', id)
  .then((author) => {
    res.json(author)
  })
})

router.get('/books', (req, res) => {
  knex('book')
  .then((books) => {
    res.send(books)
  })
})

router.get('/books/:id', (req, res) => {
  let id = req.params.id
  knex('book')
  .where('id', id)
  .then((book) => {
    res.send(book)
  })
})

module.exports = router;
