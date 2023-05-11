import { FaTrash } from "react-icons/fa";
const GetUser = (user)=>{
    const id= user._id
    const handleBan=()=>{
     //create backend to ban
      }
      const handleUnban=()=>{
       // create backend to unban
      }
    const deleteUser=async (id)=>{
        console.log(id)
            // await deleteUserServ(user._id)
            // navigate('/')
            // toast('Profile deleted')
        }

    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.is_banned? <button onClick={handleUnban}>Unban</button>: <button onClick={handleBan}>Ban</button>}</td>
            <td><a className="icon" href='/get-users' onClick={()=>deleteUser(user._id)}><FaTrash/></a></td>
        </tr>
    )
}

export default GetUser;