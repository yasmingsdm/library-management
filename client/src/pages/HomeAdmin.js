import Profile from "./Profile"
import Admin from "./Admin"
import { useLocation } from "react-router-dom"
const HomeAdmin = ()=>{
    const {state} = useLocation()
    console.log(state)
  
      return (
      <div className="main row">
            <Admin/>
            <Profile/>
      </div>
      )
  }
  
  export default HomeAdmin;