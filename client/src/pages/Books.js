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
    return (
      <div className="main" >
        {books.length > 0 && <Books books={books}/>}
      </div>
    );
  }
  
  export default AllBooks;