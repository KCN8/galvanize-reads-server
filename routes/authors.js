const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const bodyParser = require('body-parser')
const queries = require('../db/queries')

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

module.exports = router;
