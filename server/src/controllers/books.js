const Book = require("../models/books")

const getAllBooks = async (req, res)=>{
    try {
        const books = await Book.find()
       res.status(200).json({message:'list of books', books}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const getOneBook = async (req, res)=>{
    try {
        const {isbn} = req.params
        const book = await Book.findOne({isbn})
       res.status(200).json({message:'Single blog', book}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
const createBook = async (req, res)=>{

    try {
        const {title, description, author, available,isbn} = req.body
       
        if(!title || !description || !author ||!available ||!isbn){
            return  res.status(404).json({message: 'Some information is missing'})
        }
        const alreadyABook = await Book.findOne({isbn})
        if(alreadyABook){
            return  res.status(400).json({message: 'This book already exists'})
        }
        const newBook = new Book({title,description, author, available, isbn})

        await newBook.save()
       res.status(200).json({message:'book created'}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
const deleteBook = async (req, res)=>{
    try {
        const {isbn} = req.params
        await Book.findOneAndDelete({isbn})
       res.status(200).json({message:'book deleted'}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
const updateBook = async (req, res)=>{
    try {
        const {isbn} = req.params
        const {title, author, description, available} = req.body
        await Book.findOneAndUpdate({isbn}, {title, description, author, available},{new:true})
       res.status(200).json({message:'book updated'}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

module.exports ={getAllBooks, getOneBook, createBook, deleteBook, updateBook}