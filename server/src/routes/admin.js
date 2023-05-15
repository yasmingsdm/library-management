const session = require('express-session')
const dev = require('../config/config')
const { loggedin, loggedout, isAdmin } = require('../middlewares/auth')
const { loginAdmin, logoutAdmin, getAllUsers, exportExcel, exportExcelBooks } = require('../controllers/admin')

const router = require('express').Router()

router.use(session({
  name: 'admin_session',
  secret: dev.sessionKey || 'VBELUBVRTVIG5BTR55',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60*6000 } //1h
}))

  router.post('/login', loggedout, loginAdmin)
  router.get('/logout', loggedin, logoutAdmin)
  router.get('/dashboard/all-users', getAllUsers)
  router.get('/dashboard/excel/user', exportExcel)
  router.get('/dashboard/excel/book', exportExcelBooks)

 module.exports = router