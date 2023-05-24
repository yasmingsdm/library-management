const {describe, beforeAll, afterAll, afterEach,it, expect} = require('@jest/globals')
const request = require('supertest')
const {mongoose} = require('mongoose')
const dev = require('../config/config');
const Book = require("../models/books")
const index = require("../index")

beforeAll(async()=>{
    await mongoose.connect(dev.url)
    })

afterAll(async()=>{
    await mongoose.connection.close()
    })

afterEach(async()=>{
    await Book.deleteMany()
    })

const createBook = async(title, description, author, isbn)=>{
return await request(index).post("/book").send({title,description,author,isbn})
}

describe("Create a book", ()=>{
    //if no title
    it("title is missing", async()=>{
        const res = await createBook(undefined, "description here", "Jojo Moyes", "12345678910")
        expect(res.statusCode).toEqual(404)
        expect(res.body.message).toEqual('Some information is missing')
    })
    //if no description
    //if no isbn
    //if no author
    //if already a book
    //created succesfully
})