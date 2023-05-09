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
import Logout from "./pages/Logout";
import AllBooks from "./pages/Books";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
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
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/create-book' element ={<CreateBook/>}/>
        </>}
        <Route path='/' element={<Main/>}/>
        <Route path='/book/:isbn' element ={<BookPage/>}/>
        <Route path='/books' element={<AllBooks/>}/>
        {loggedin?
        <>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/logout' element={<Logout/>}/>
        
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
