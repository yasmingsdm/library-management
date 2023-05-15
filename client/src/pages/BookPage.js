import { useNavigate, useParams } from "react-router-dom";
import { getOneBookServ } from "../Service/Books";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BorrowBookServ } from "../Service/Users";

function BookPage() {
  const loggedin = useSelector((state)=>state.user.Loggedin)
  const navigate = useNavigate()
  const [book, setBook] = useState([])
  const {isbn} = useParams()
  const fetchBook = async()=>{
    const response = await getOneBookServ(isbn)
    setBook(response.data.book)
  }
  useEffect(()=>{
    fetchBook()
    },[])

  const handleBorrow=async()=>{
    if(!loggedin){
      navigate('/login')
      toast('Login first to borrow a book')
    }else{
      //how to get the user?
      // const response = await BorrowBookServ(user, book)
      // console.log(response)
      // toast(response.data.message)
    }
  }

  const handleQueue=()=>{
    if(!loggedin){
      navigate('/login')
      toast('Login first to borrow a book')
    }else{
      //how to do it?
      toast('We will let you know when this book is available')
    }
  }

    return (
        <div className='main'>
            <section className="book">
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
                {book.available === 1?<button onClick={handleBorrow}>Borrow</button> : <button onClick={handleQueue}>Queue</button>}
            </section>
      </div>
    );
  }
  
  export default BookPage;