import { useState } from "react";
import { toast } from "react-toastify";
import { createBookServ } from "../Service/Books";
import { useNavigate } from "react-router-dom";

function CreateBook() {
    const navigate = useNavigate()
    const [book, setBook] = useState({
        title:'',
        description: '',
        author:'',
        isbn:'',
        available:''
    });

    const handleChange= (e)=>{
        setBook(prevBook => {
            return {...prevBook, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit= async (e)=>{
      try {
        e.preventDefault()
        const response = await createBookServ(book)
        toast(response.data.message)
         setBook({
            title:'',
        description: '',
        author:'',
        isbn:'',
        available:''
        })
        navigate('/get-books')
      } catch (error) {
        toast(error.response.data.message)
      }
  }

    return (
      <div className="main" >
        <form action='' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title of the book: </label>
        <input type='text' required value={book.title} onChange={handleChange} name='title' id='title'/>
        <label htmlFor='author'>Author of the book: </label>
        <input type='text' required value={book.author} onChange={handleChange} name='author' id='author'/>
        <label htmlFor='isbn'>ISBN: </label>
        <input type='number' required value={book.isbn} onChange={handleChange} name='isbn' id='isbn'/>
        <label htmlFor='description'>Description: </label>
        <textarea value={book.description} onChange={handleChange} name='description' id='description' cols={30} rows={10} required/>
        <label htmlFor='available'>Quantity: </label>
        <input type='number' required value={book.available} onChange={handleChange} name='available' id='available'/>
        <button type='submit'>Create</button>
        </form>
        
      </div>
    );
  }

  
  
  export default CreateBook;