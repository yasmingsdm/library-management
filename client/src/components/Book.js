import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Book(book) {
  const navigate = useNavigate()
  const admin = useSelector((state)=>state.user.Admin)
  const handleClick =()=>{
    navigate(`/book/${book.isbn}`)
  }
  const handleManage =()=>{
    navigate(`/manage-book/${book.isbn}`)
  }
    return (
      <div className="book">
       <h2>{book.title}</h2>
       <h3>{book.author}</h3>
       <p>{book.description.substring(0,150)}...</p>
       {admin?<button onClick={handleManage}>Manage</button>: <button onClick={handleClick}>Read more</button>}
      </div>
    );
  }
  
  export default Book;