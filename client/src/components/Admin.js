import { NavLink } from "react-router-dom";
import '../pages/Admin.css'
import { toast } from "react-toastify";
import { exportUsersExcel } from "../Service/Users";
import { exportBooksExcel } from "../Service/Books";

const Admin = ()=>{
    const exportUsers =async(e)=> { 
        try {
            e.preventDefault()
            await exportUsersExcel() 
          } catch (error) {
            toast(error.response.data.message)
          }
        }

        const exportBooks =async(e)=> { 
          try {
              e.preventDefault()
              await exportBooksExcel() 
            } catch (error) {
              toast(error.response.data.message)
            }
        
          }

    return (
    <div className="main row">
        <section className="book admin">
                <h2>Users</h2>
                <NavLink to='/get-users' className={'nav'}>Get all</NavLink>
                <NavLink className={'nav'} onClick={exportUsers} to='/'>Export</NavLink>
                <h2>Books</h2>
                <NavLink to='/create-book'className={'nav'}>Create</NavLink>
                <NavLink className={'nav'} to='/get-books'>Get all</NavLink>
                <NavLink className={'nav'}onClick={exportBooks} to='/'>Export</NavLink>
        </section>
    </div>
    )
}

export default Admin;