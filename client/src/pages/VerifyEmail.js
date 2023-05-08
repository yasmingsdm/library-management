import { useNavigate, useParams } from "react-router-dom";
import { activateUserServ } from "../Service/Users";

function Activate() {
    const {token} = useParams()
    const navigate = useNavigate()
    const handleActivate=async ()=>{
        await activateUserServ({token})
        navigate('/login')
    }

      return (
        <div >
         <h2>Click here to activate your account</h2>
         <button onClick={handleActivate}>ACTIVATE</button>
         
        </div>
      );
    }
    
    export default Activate;