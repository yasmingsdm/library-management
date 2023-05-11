import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProfileServ } from "../Service/Users";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Profile = ()=>{
    const {state} = useLocation()
    const [user, setUser]= useState([])
    const navigate = useNavigate()
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
        const handleUpdate = ()=>{
            navigate(`/update-user/${state.id}`)
      }
    return (
    <div className="book">
        <h1>Hello, {user.name}</h1>
        <p>e-mail: {user.email}</p>
        <p>username: {user.username}</p>
        <button onClick={handleDelete}><FaTrash/></button>
        <button onClick={handleUpdate}><FaPencilAlt/></button>
    </div>
    )
}

export default Profile;