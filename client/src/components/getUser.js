import { FaTrash } from "react-icons/fa";
const GetUser = (user)=>{
    const handleBan=()=>{
     //create backend to ban
      }
      const handleUnban=()=>{
       // create backend to unban
      }
    const deleteUser=()=>{
        //delete user backend
    }
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.is_banned? <button onClick={handleUnban}>Unban</button>: <button onClick={handleBan}>Ban</button>}</td>
            <td><a className="icon" href='/get-users' onClick={deleteUser}><FaTrash/></a></td>
        </tr>
    )
}

export default GetUser;