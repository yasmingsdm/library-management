import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavLogin = ()=>{
    const admin = useSelector((state)=>state.user.Admin)
    return (
    <nav className="nav">
    <NavLink to='/'>HOME</NavLink>
    <NavLink to='/books'>All books</NavLink>
    <NavLink to='/profile'>Profile</NavLink>
    <NavLink to='/logout'>Logout</NavLink>
    {admin && <NavLink to='/admin'>Admin</NavLink>}
    </nav>
    )
}

export default NavLogin;