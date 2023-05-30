const session = require('cookie-session')
const router = require('express').Router()

const { signUpUser, VerifyEmail, loginUser, logoutUser, profile, deleteUser, updateUser, resetPassword, VerifyPassword, banUser, borrowBook, returnBook, queueBook } = require('../controllers/users')
const dev = require('../config/config')
const { loggedin, loggedout } = require('../middlewares/auth')



router.use(session({
  name: 'user_session',
  secret: dev.sessionKey || 'VBELUBVRTVIG5BTR55',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60*6000 } //1h
}))
  router.post('/signup', signUpUser)
  router.post('/verify-email', VerifyEmail)
  router.post('/login', loggedout,  loginUser)
  router.get('/logout', loggedin, logoutUser)
  router.put('/ban/:id', banUser)
  router.post('/reset-password',  resetPassword)
  router.post('/verify-password',  VerifyPassword)
  router.post('/:userId/borrow/:bookId', borrowBook)
  router.post('/:userId/return/:bookId', returnBook)
  router.post('/:userId/queue/:bookId', queueBook)
  router.route('/:_id')
  .get(profile)
  .delete(deleteUser)
  .put(updateUser)


 module.exports = router