import { toast } from "react-toastify"
import { logoutUserServ } from "../Service/Users"
import { useNavigate } from "react-router-dom"

const Logout = ()=>{
    const navigate = useNavigate()
    const handleLogout =async(e)=> { 
        try {
            e.preventDefault()
            const response = await logoutUserServ()
            console.log(response)
            toast(response.data)
            navigate('/')
          } catch (error) {
            toast(error.response.data.message)
          }
      
        }
    return (
        <div className="main">
            <h2>Are you sure you want to logout?</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
  
    )
}

export default Logout;