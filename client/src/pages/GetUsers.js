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
  console.log(users)

    return (
      <div className="main" >
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>E-mail</th>
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