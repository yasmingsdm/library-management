const {Schema, model} = require('mongoose')

const bookSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Please insert a title'],
        trim: true,
        unique:true
    },
    description:{
        type: String,
        required: [true, 'Please insert a title'],
        trim: true,
        unique:true
    },
   isbn:{
        type: Number,
        required:[true, 'Please insert the isbn'],
    },
    available:{
        type:Number,
       default:1
    },
    author:{
        type: String,
        required: [true, 'Please insert the author'],
        trim: true
    }
},{timestamps:true})
    
const Book = model('book', bookSchema)

module.exports = Book