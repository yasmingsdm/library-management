import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteUserServ, getProfileServ } from "../Service/Users";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const Profile = ()=>{
    const dispatch = useDispatch()
    const [user, setUser]= useState([])
    const navigate = useNavigate()
    const id = localStorage.getItem('userId')
    const fetchProfile = async()=>{
        try {
            const response = await getProfileServ(id)
            setUser(response.data.profile)
        } catch (error) {
            toast(error.response.data.message)
        }
    }
   
    useEffect(()=>{
        fetchProfile()
        },[])

        const handleDelete =async ()=>{
            await deleteUserServ(id)
            navigate('/')
            dispatch(logout())
            toast('Profile deleted')
        }
        const handleUpdate = ()=>{
            navigate(`/update-user/${id}`)
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