import {  useNavigate, useParams } from "react-router-dom";
import { getOneBookServ, updateBookServ } from "../Service/Books";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


function UpdateBook() {
    const navigate = useNavigate()
    const {isbn} = useParams()
    const [book, setBook] = useState([])
    const [newBook, setNewBook] = useState({
        title:'',
        description: '',
        author:'',
        available:''
    });
    const fetchBook = async()=>{
        const response = await getOneBookServ(isbn)
        setBook(response.data.book)
        setNewBook({
            title:response.data.book.title,
            description:response.data.book.description,
            author:response.data.book.author,
            available: response.data.book.available
        })
      }
    useEffect(()=>{
        fetchBook()
        },[])
       
        const handleChange =async (e)=>{
            setNewBook(prevBook => {
                return {...prevBook, [e.target.name]: e.target.value}
            })
        }
    const handleSubmit =async (e)=>{
        try {
            e.preventDefault()
            const response = await updateBookServ(isbn,newBook)
             toast(response.data.message)
             setNewBook({
            title:'',
            description: '',
            author:'',
            available:''
            })
            navigate('/get-books')
          } catch (error) {
            toast(error.response.data.message)
          }
    }
   
    return (
      <div className="book row">
        <div className="left">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
            <p>Available: {book.available}</p>
        </div>
        <div className="right">
        <form action='' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title of the book: </label>
        <input type='text' required value={newBook.title} onChange={handleChange} name='title' id='title'/>
        <label htmlFor='author'>Author of the book: </label>
        <input type='text' required value={newBook.author} onChange={handleChange} name='author' id='author'/>
        <label htmlFor='description'>Description: </label>
        <textarea value={newBook.description} onChange={handleChange} name='description' id='description' cols={30} rows={10} required/>
        <label htmlFor='available'>Quantity: </label>
        <input type='number' required value={newBook.available} onChange={handleChange} name='available' id='available'/>
        <button type='submit'>Update</button>
        </form>
        </div>
      </div>
    );
  }
  
  export default UpdateBook;