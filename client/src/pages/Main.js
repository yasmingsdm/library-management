import {useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooksServ } from "../Service/Books";
import './Main.css'

function Main() {
  const [books, setBooks] = useState([])
  const [recentBooks, setRecentBooks] = useState([])
  const fetchAllBooks = async()=>{
    const response = await getAllBooksServ()
    setBooks(response.books)
  }
  useEffect(()=>{
  fetchAllBooks()
  },[])
  const recent =[]
  for(let i=0; i<books.length; i++){
    const bookMonth = books[i].updatedAt.split('T')[0]
    const actualMonth =new Date().toISOString().split('T')[0]
    
    if(bookMonth === actualMonth){
      recent.push(books[i])
    }
  }
  // setRecentBooks(recent)
    return (
      <div className="main" >
        <h1>Recently Added</h1>
        {recentBooks.length > 0 && <Books recentBooks={recentBooks}/>}
      </div>
    );
  }
  
  export default Main;