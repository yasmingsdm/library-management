import Profile from "./Profile"
import Admin from "../components/Admin"

const HomeAdmin = ()=>{
      return (
      <div className="main row">
            <Admin/>
            <Profile/>
      </div>
      )
  }
  
  export default HomeAdmin;