import { toast } from "react-toastify"
import { logoutUserServ } from "../Service/Users"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../features/userSlice"

const Logout = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout =async(e)=> { 
        try {
            e.preventDefault()
            dispatch(logout())
            const response = await logoutUserServ() 
            console.log(response)
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