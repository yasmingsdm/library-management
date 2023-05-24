import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { deleteBookServ, getOneBookServ} from "../Service/Books";

function ManageBook() {
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
        const handleUpdate =()=>{
          navigate(`/update-book/${isbn}`)
      }
    return (
      <div className="book">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        <button onClick={handleDelete}><FaTrash/></button>
        <button onClick={handleUpdate}><FaPencilAlt/></button>
       
      </div>
    );
  }
  
  export default ManageBook;