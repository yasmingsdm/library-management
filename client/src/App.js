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
import Profile from "./pages/Profile";
import AllBooks from "./pages/Books";
import Admin from "./components/Admin";
import { useSelector } from "react-redux";
import GetUsers from "./pages/GetUsers";
import GetBooks from "./pages/GetBooks";
import ManageBook from "./pages/ManageBook";
import UpdateBook from "./pages/UpdateBook";
import HomeAdmin from "./pages/HomeAdmin";
import UpdateUser from "./pages/UpdateUser";
import ResetPassword from "./pages/ResetPassword";
import VerifyPassword from "./pages/VerifyPassword";
import SearchBook from "./pages/SearchBook";
function App() {
  const loggedin = useSelector((state)=>state.user.Loggedin)
  const admin = useSelector((state)=>state.user.Admin)
  return (
    <div className="App">
     
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
      <Routes>
        {admin &&
        <>
        <Route path='/admin' element={<HomeAdmin/>}/>
        <Route path='/create-book' element ={<CreateBook/>}/>
        <Route path='/get-users' element ={<GetUsers/>}/>
        <Route path='/get-books' element ={<GetBooks/>}/>
        <Route path='/manage-book/:isbn' element ={<ManageBook/>}/>
        <Route path='/update-book/:isbn' element ={<UpdateBook/>}/>
        </>}

        <Route path='/' element={<Main/>}/>
        <Route path='/book/:isbn' element ={<BookPage/>}/>
        <Route path='/books' element={<AllBooks/>}/>
        <Route path='/search-book' element={<SearchBook/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/user/reset-password/:token' element={<VerifyPassword/>}/>
        
        {loggedin?
        <>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/update-user/:id' element={<UpdateUser/>}/>
        
        </>
        : <>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/user/activate/:token' element={<Activate/>}/>
        <Route path='/login' element={<Login/>}/>
        </>
        }
      
        <Route path='*' element={<Main/>}/>
    
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
