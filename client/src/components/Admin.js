import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import '../pages/Admin.css'
import { exportUsersExcel } from "../Service/Users";
import { exportBooksExcel } from "../Service/Books";

const Admin = ()=>{
  function exportUsers() {
    fetch('http://localhost:8001/admin/dashboard/excel/user')
      .then((response) => response.blob())
      .then((blob) => {
  // Create a download link element
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'users.xls';
  // Append the link to the body and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
  // Clean up the URL object after the download
    URL.revokeObjectURL(downloadLink.href);
      })
      .catch((error) => {
        console.error('Error downloading Excel:', error);
      });
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