import { NavLink } from "react-router-dom";

const NavLogin = ()=>{
    return (
    <nav className="nav">
    <NavLink to='/'>HOME</NavLink>
    <NavLink to='/books'>All books</NavLink>
    <NavLink to='/profile'>Profile</NavLink>
    <NavLink to='/logout'>Logout</NavLink>
    </nav>
    )
}

export default NavLogin;