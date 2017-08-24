const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const bodyParser = require('body-parser')
const queries = require('../db/queries')

router.get('/', (req, res) => {
  //Need join table
})
/* GET all authors. */
router.get('/authors', (req, res) => {
  queries.getAllAuthors()
  .then((authors) => {
    res.json(authors)
  })
  .catch(error => res.json({ error }) )
})
/* GET author by ID. */
router.get('/authors/:id', (req, res) => {
  let id = req.params.id
  queries.getAuthorByID(id)
  .then((author) => {
    res.json(author)
  })
  .catch(error => res.json({ error }) )
})
/* GET all books. */
router.get('/books', (req, res) => {
  queries.getAllBooks()
  .then((books) => {
    res.json(books)
  })
  .catch(error => res.json({ error }) )
})
/* GET book by ID. */
router.get('/books/:id', (req, res) => {
  let id = req.params.id
  queries.getBookByID(id)
  .then((book) => {

    res.json(book[0])
  })
  .catch(error => res.json({ error }) )
})

module.exports = router;
