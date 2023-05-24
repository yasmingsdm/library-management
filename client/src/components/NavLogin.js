import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../features/userSlice";
import { logoutUserServ } from "../Service/Users";


const NavLogin = ()=>{
    const admin = useSelector((state)=>state.user.Admin)
    const dispatch = useDispatch()
    const handleLogout =async(e)=> { 
        try {
            e.preventDefault()
            dispatch(logout())
            await logoutUserServ()
          } catch (error) {
            console.log(error)
          }
      
        }
    return (
    <nav className="nav">
    <NavLink to='/'>HOME</NavLink>
    {!admin && <NavLink to='/books'>All books</NavLink>}
    <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
    {admin && <NavLink to='/admin'>Admin</NavLink>}
    </nav>
    )
}

export default NavLogin;