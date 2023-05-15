import {useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooksServ } from "../Service/Books";

function AllBooks() {
  const [books, setBooks] = useState([])
  const fetchAllBooks = async()=>{
    const response = await getAllBooksServ()
    setBooks(response.books)
  }
  useEffect(()=>{
  fetchAllBooks()
  },[])

  let list = []
  const [booksList, setBooksList] = useState(list)

  const handleSearch =(e)=>{
    list = books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase())|| book.author.toLowerCase().includes(e.target.value.toLowerCase()))
    setBooksList(list)
}
    return (
      <div className="main-books" >
        <input type='text' placeholder="Search" onChange={handleSearch} />
        {books.length > 0 && booksList.length > 0? <Books books={booksList}/>: <Books books={books}/>}
      </div>
    );
  }
  
  export default AllBooks;