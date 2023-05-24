const router = require('express').Router()

const { getAllBooks, createBook, getOneBook, updateBook, deleteBook, getAllBooksByPage } = require('../controllers/books')

router.get('/search', getAllBooks)
router.route('/')
.get(getAllBooksByPage)
.post(createBook)
router.route('/:isbn')
.get(getOneBook)
.put(updateBook)
.delete(deleteBook)

module.exports = router