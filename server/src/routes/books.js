const { getAllBooks, createBook, getOneBook, updateBook, deleteBook } = require('../controllers/books')

const router = require('express').Router()

router.route('/')
.get(getAllBooks)
.post(createBook)
router.route('/:isbn')
.get(getOneBook)
.put(updateBook)
.delete(deleteBook)
module.exports = router