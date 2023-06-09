import Book from "./Book";

function Books({books}) {
    return (
      <div className="books">
       {books && books.map((book) => (
                <Book key={book._id} {...book} />))} 
      </div>
    );
  }
  
  export default Books;