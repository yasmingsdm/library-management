import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import '../pages/Admin.css'
import { exportUsersExcel } from "../Service/Users";
import { exportBooksExcel } from "../Service/Books";

const Admin = ()=>{
    const exportUsers =async(e)=> { 
        try {
          e.preventDefault()
            const response = await exportUsersExcel() 
            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'users.xlsx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
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
                <NavLink className={'nav'} to='/books'>Get all</NavLink>
                <NavLink className={'nav'}onClick={exportBooks} to='/'>Export</NavLink>
        </section>
    </div>
    )
}

export default Admin;