import {  useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProfileServ, updateUserServ } from "../Service/Users";


function UpdateUser() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [user, setUser] = useState([])
    const [newUser, setNewUser] = useState({
        name:'',
        email: ''
    });
    const fetchUser = async()=>{
        const response = await getProfileServ(id)
        setUser(response.data.profile)
        setNewUser({
            name:response.data.profile.name,
            email:response.data.profile.email
        })
      }
    useEffect(()=>{
        fetchUser()
        },[])
       
    const handleChange =async (e)=>{
        setNewUser(prevUser => {
            return {...prevUser, [e.target.name]: e.target.value}
        })
    }
    const handleSubmit =async (e)=>{
        try {
            e.preventDefault()
            const response = await updateUserServ(id,newUser)
             toast(response.data.message)
             setUser(newUser)
             setNewUser({
            name:'',
            email: '',
            })
          } catch (error) {
            toast(error.response.data.message)
          }

    }
   
     return (
      <div className="main row">
        <div className="left">
            <h2>username: {user.username}</h2>
            <p>It's not possible to change your username</p>
            <h3>e-mail: {user.email}</h3>
            <h3>name: {user.name}</h3>
        </div>
        <div className="right">
        <form action='' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input type='text' required value={newUser.name} onChange={handleChange} name='name' id='name'/>
        <label htmlFor='email'>E-mail: </label>
        <input type='email' required value={newUser.email} onChange={handleChange} name='email' id='email'/>
        <button type='submit'>Update</button>
        </form>
        <a href='/reset-password' className="white">Update password</a>
         </div>
      </div>
     );
  }
  
  export default UpdateUser;