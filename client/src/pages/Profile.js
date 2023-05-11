import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProfileServ } from "../Service/Users";
import { useLocation } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Profile = ()=>{
    const {state} = useLocation()
    const [user, setUser]= useState([])
    const fetchProfile = async()=>{
        try {
            const response = await getProfileServ(state.id)
            setUser(response.data.profile)
        } catch (error) {
            toast(error.response.data.message)
        }
    }
   
    useEffect(()=>{
        fetchProfile()
        },[])

        const handleDelete =async ()=>{
            
        }
        const handleUpdate =async ()=>{
          
      }
    return (
    <div className="book">
        <h1>Hello, {user.name}</h1>
        <p>e-mail: {user.email}</p>
        <p>username: {user.username}</p>
        <button onClick={handleDelete}><FaTrash/></button>
        <button onClick={handleUpdate}><FaPencilAlt/></button>
        <button onClick={handleUpdate}>Change Password</button>
    </div>
    )
}

export default Profile;