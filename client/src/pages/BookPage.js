import { useParams } from "react-router-dom";
import { getOneBookServ } from "../Service/Books";
import { useEffect, useState } from "react";

function BookPage() {
    const [book, setBook] = useState([])
  const {isbn} = useParams()
  console.log(isbn)
  const fetchBook = async()=>{
    const response = await getOneBookServ(isbn)
    setBook(response.data.book)
  }
  useEffect(()=>{
    fetchBook()
    },[])

    return (
        <div className='main'>
            <section className="book">
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
                {book.available > 0?<button>Borrow</button> : <button>Queue</button>}
            </section>
      </div>
    );
  }
  //navigate to login if not loggedin, change button to return if logged in
  
  export default BookPage;