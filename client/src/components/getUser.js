import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

import { banUserServ, deleteUserServ } from "../Service/Users";
const GetUser = (user)=>{
    const [banned, setBanned]= useState(user.is_banned)
    const id= user._id
    
    const handleBan=async (id)=>{
        await banUserServ(id)
        setBanned(!banned)
      }

    const deleteUser= async (id)=>{
             await deleteUserServ(id)
            toast('Profile deleted')
        }

    return (
        <tr key={user._id}>
            <td className="hide">{user.name}</td>
            <td>{user.username}</td>
            <td className="hide">{user.email}</td>
            <td> <button onClick={()=>handleBan(id)}>{banned?'Unban':'Ban'}</button></td>
            <td><a className="icon" href='/get-users' onClick={()=>deleteUser(id)}><FaTrash/></a></td>
        </tr>
    )
}

export default GetUser;