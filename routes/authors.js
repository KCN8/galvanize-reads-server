const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const bodyParser = require('body-parser')
const queries = require('../db/queries')

/* GET all authors. */
router.get('/', (req, res, next) => {
  queries.getAllAuthors()
  .then((authors) => {
    return Promise.all(authors.map(author => {
      return queries.getBooksByAuthorID(author.id)
      .then(books => {
        author.books = books
        return author
      })
    }))
  })
  .then(authors => {
    res.json(authors)
  })
  .catch(error => res.json({ error }) )
})
/* GET author by ID. */
router.get('/:id', (req, res, next) => {
  let id = req.params.id
  queries.getAuthorByID(id)
  .then((author) => {
    res.json(author)
  })
  .catch(error => res.json({ error }) )
})
/* POST a new author. */
router.post('/', (req, res, next) => {
    res.send('hi')
})

module.exports = router;
