import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import BookPage from "./pages/BookPage";
import CreateBook from "./pages/CreateBook";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./pages/SignUp";
import Activate from "./pages/VerifyEmail";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/book/:isbn' element ={<BookPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/user/activate/:token' element={<Activate/>}/>
        <Route path='/login' element={<Login/>}/>
   {   //,, sign in, 
        //if login: logout, profile, borrow/return
      //if adm: create book, update book, delete book, export excel, list of users
  }
   <Route path='/create-book' element ={<CreateBook/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
