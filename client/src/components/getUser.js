import { FaTrash } from "react-icons/fa";
import { deleteUserServ } from "../Service/Users";
import { toast } from "react-toastify";
const GetUser = (user)=>{
    console.log(user)
    const banned = user.is_banned
    const id= user._id
    const handleBan=()=>{
     //create backend to ban
      }
      const handleUnban=()=>{
       // create backend to unban
      }
    const deleteUser= async (id)=>{
             await deleteUserServ(id)
            toast('Profile deleted')
        }

    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.is_banned? <button onClick={handleUnban}>Unban</button>: <button onClick={()=>handleBan(banned)}>Ban</button>}</td>
            <td><a className="icon" href='/get-users' onClick={()=>deleteUser(id)}><FaTrash/></a></td>
        </tr>
    )
}

export default GetUser;