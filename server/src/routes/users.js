const { signUpUser, VerifyEmail, loginUser, logoutUser, profile, deleteUser, updateUser, resetPassword, VerifyPassword, banUser } = require('../controllers/users')
const session = require('express-session')
const dev = require('../config/config')
const { loggedin, loggedout } = require('../middlewares/auth')

const router = require('express').Router()

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
  router.route('/:_id')
  .get(profile)
  .delete(deleteUser)
  .put(updateUser)
  router.post('/reset-password',  resetPassword)
  router.post('/verify-password',  VerifyPassword)

 module.exports = router