import { useNavigate } from "react-router-dom";

function Book(book) {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate(`/book/${book.isbn}`)
  }
    return (
      <div className="book">
       <h2>{book.title}</h2>
       <h3>{book.author}</h3>
       <p>{book.description.substring(0,50)}...</p>
       <button onClick={handleClick}>Read more</button>
      </div>
    );
  }
  
  export default Book;