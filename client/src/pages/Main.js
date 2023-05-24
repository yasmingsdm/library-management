import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Books from "../components/Books";
import { getAllBooksServ } from "../Service/Books";
import './Main.css'


function Main() {
  const [books, setBooks] = useState([])
  const [recentBooks, setRecentBooks] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const fetchAllBooks = async () => {
      const response = await getAllBooksServ();
      setBooks(response.books);
      const recent = [];
      for (let i = 0; i < response.books.length; i++) {
        const bookMonth = response.books[i].updatedAt.split("T")[0];
        const actualMonth = new Date().toISOString().split("T")[0];
        if (bookMonth === actualMonth) {
          recent.push(response.books[i]);
        }
      }
      setRecentBooks(recent);
    };
    fetchAllBooks();
  }, []);
  const handleClick =()=>{
    navigate('/books')
  }
    return (
      <div className="main" >
        {recentBooks.length > 0? 
        <div>
          <h1>Recently Added</h1> 
          <Books books={recentBooks}/>
        </div>
        : 
        <div>
          <h2>No new books added today!</h2>
          <button onClick={handleClick}>Check all books</button>
        </div>}
      </div>
    );
  }
  
  export default Main;