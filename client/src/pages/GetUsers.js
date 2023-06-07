import {useEffect, useState } from "react";

import { getAllUsersServ } from "../Service/Users";
import GetUser from "../components/getUser";


const GetUsers = ()=> {
  const [users, setUsers] = useState([])
  const fetchAllUsers = async()=>{
    const response = await getAllUsersServ()
    setUsers(response.data.allUsers)
  }
  useEffect(()=>{
  fetchAllUsers()
  },[])

    return (
      <div className="main" >
        <table>
            <thead>
                <tr>
                    <th className="hide">Name</th>
                    <th>Username</th>
                    <th className="hide">E-mail</th>
                    <th>Ban/Unban</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((user) => (<GetUser key={user._id} {...user}/>
               ))}
            </tbody>
        </table>
     
      </div>
    );
  }
  
  export default GetUsers;