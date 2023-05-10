import { NavLink } from "react-router-dom";
import './Admin.css'
import { toast } from "react-toastify";
import { exportUsersExcel } from "../Service/Users";

const Admin = ()=>{
    const exportUsers =async(e)=> { 
        try {
            e.preventDefault()
            const response = await exportUsersExcel() 
            console.log(response)
          } catch (error) {
            toast(error.response.data.message)
          }
      
        }
    return (
    <div className="main">
        <section className="book">
                
                <h2>Users</h2>
                <NavLink to='/get-users' className={'nav'}>Get all</NavLink>
                <NavLink className={'nav'} onClick={exportUsers} to='/'>Export</NavLink>
                <h2>Books</h2>
                <NavLink to='/create-book'className={'nav'}>Create</NavLink>
                <NavLink className={'nav'}>Update</NavLink>
                <NavLink className={'nav'}>Delete</NavLink>
                <NavLink className={'nav'}>Export</NavLink>
        </section>

    </div>
    )
}

export default Admin;