import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProfileServ } from "../Service/Users";
import { useParams } from "react-router-dom";

const Profile = ()=>{
    const [user, setUser]= useState([])

    const fetchProfile = async()=>{
        try {
            const response = await getProfileServ()
            console.log(response.data)
        } catch (error) {
            toast(error.response.data.message)
        }
    }
   
    useEffect(()=>{
        fetchProfile()
        },[])
    return (
    <div>
        profile
    </div>
    )
}

export default Profile;