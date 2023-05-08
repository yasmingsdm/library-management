import { NavLink } from "react-router-dom";
import './Admin.css'

const Admin = ()=>{
    return (
    <div className="main">
        <section className="book">
                <h2>Users</h2>
                <nav><NavLink>Get all</NavLink></nav>
                <nav><NavLink>Ban/Unban</NavLink></nav>
                <nav><NavLink>Export</NavLink></nav>
                <h2>Books</h2>
                <nav><NavLink to='/create-book'>Create</NavLink></nav>
                <nav><NavLink>Update</NavLink></nav>
                <nav><NavLink>Delete</NavLink></nav>
                <nav><NavLink>Export</NavLink></nav>
        </section>

    </div>
    )
}

export default Admin;