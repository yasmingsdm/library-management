import {useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooksByPageServ } from "../Service/Books";
import { useSelector } from "react-redux";

function AllBooks() {
  const [books, setBooks] = useState([])
  const [page, setPage]= useState(1)
  const admin = useSelector((state)=>state.user.Admin)

  const fetchAllBooks = async()=>{
    const response = await getAllBooksByPageServ(page)
    setBooks(response.books)
  }

  useEffect(()=>{
  fetchAllBooks()
  },[page])

  
  const handleNext = ()=>{
    setPage(prevPage => prevPage +1)
  }

  const handlePrev = ()=>{
    setPage(prevPage => prevPage -1)
  }
 
    return (
      <div className="main-books" >
        {!admin && <a href='/search-book' className="white">Search for a book</a>}
        {books.length > 0 && <Books books={books}/>}
        <button onClick={handlePrev} disabled={page === 1}>Preview</button>
        <button onClick={handleNext} disabled={books.length < 6}>Next</button>
      </div>
    );
  }
  
  export default AllBooks;