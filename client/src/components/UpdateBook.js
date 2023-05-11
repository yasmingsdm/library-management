import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBookServ, getOneBookServ } from "../Service/Books";
import { useEffect, useState } from "react";

function UpdateBook() {
    const {isbn} = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState([])
    const fetchBook = async()=>{
        const response = await getOneBookServ(isbn)
        setBook(response.data.book)
      }
      useEffect(()=>{
        fetchBook()
        },[])
        const handleDelete =async ()=>{
            await deleteBookServ(isbn)
            navigate('/get-books')
        }
    return (
      <div className="book">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        <button onClick={handleDelete}><FaTrash/></button>
        {/* <a className="icon black" href='/get-users' ><FaPencilAlt/></a>  */}
       
      </div>
    );
  }
  
  export default UpdateBook;