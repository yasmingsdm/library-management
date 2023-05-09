import { useSelector } from 'react-redux';
import './Header.css'
import NavLogin from './NavLogin';
import NavLogout from './NavLogout';
const Header = ()=>{
const loggedin = useSelector((state)=>state.user.Loggedin)
    return (
    <header className="header">
        {loggedin? <NavLogin/> : <NavLogout/>}
        <h1>Library Website</h1>
    </header>)
}

export default Header;