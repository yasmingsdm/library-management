import './Header.css'
import NavLogin from './NavLogin';
import NavLogout from './NavLogout';
const Header = ()=>{

    return (
    <header className="header">
        <NavLogin/>
        <h1>Library Website</h1>
    </header>)
}

export default Header;