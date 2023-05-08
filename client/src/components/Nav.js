import { NavLink } from "react-router-dom";

const Nav = ()=>{
    return (
    <nav className="nav">
    <NavLink to='/'>HOME</NavLink>
    <NavLink to='/signup'>Sign Up</NavLink>
    <NavLink to='/login'>Sign In</NavLink>
    </nav>
    )
}

export default Nav;