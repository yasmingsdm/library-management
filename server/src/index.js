const express = require ('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const userRouter = require('./routes/users')
const adminRouter = require('./routes/admin')
const bookRouter = require('./routes/books')
const dev = require('./config/config')
const connectDB = require('./config/db')


const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('dev'))
const port= dev.port

app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/book', bookRouter)
app.get('/', (req,res)=>{
    res.status(200).json({message:'Testing'})
})

app.listen(port, async ()=>{
    console.log(`Running at http://localhost:${port}`)
    await connectDB()
})