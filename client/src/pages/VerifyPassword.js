import { useNavigate, useParams } from "react-router-dom";

import {verifyPasswordServ } from "../Service/Users";

function VerifyPassword() {
    const {token} = useParams()
    const navigate = useNavigate()
    const handleActivate=async ()=>{
        await verifyPasswordServ(token)
        navigate('/login')
    }

      return (
        <div >
         <h2>Click here to change your password</h2>
         <button onClick={handleActivate}>CHANGE</button>
         
        </div>
      );
    }
    
    export default VerifyPassword;