import { NavLink } from "react-router-dom";

import '../pages/Admin.css'

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

  function exportBooks() {
    fetch('http://localhost:8001/admin/dashboard/excel/book')
      .then((response) => response.blob())
      .then((blob) => {
  // Create a download link element
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'books.xls';
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