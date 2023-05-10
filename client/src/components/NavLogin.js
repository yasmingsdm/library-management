import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../features/userSlice";
import { logoutUserServ } from "../Service/Users";
import { toast } from "react-toastify";

const NavLogin = ()=>{
    const admin = useSelector((state)=>state.user.Admin)
    const dispatch = useDispatch()
    const handleLogout =async(e)=> { 
        try {
            e.preventDefault()
            dispatch(logout())
            const response = await logoutUserServ() 
            console.log(response)
          } catch (error) {
            toast(error.response.data.message)
          }
      
        }
    return (
    <nav className="nav">
    <NavLink to='/'>HOME</NavLink>
    <NavLink to='/books'>All books</NavLink>
    <NavLink to='/profile'>Profile</NavLink>
    <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
    {admin && <NavLink to='/admin'>Admin</NavLink>}
    </nav>
    )
}

export default NavLogin;