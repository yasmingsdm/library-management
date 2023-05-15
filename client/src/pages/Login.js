import { useState } from "react";
import Input from "../components/Input";
import { loginUserServ } from "../Service/Users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { admin, login } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch()
    const [user, setUser] = useState({
        username:'',
        password: ''
    });
    const navigate = useNavigate()

    const handleChange= (e)=>{
        setUser(prevUser => {
            return {...prevUser, [e.target.name]: e.target.value}
        })
    }
    const inputs = [
        {id:1,
        type:'text',
        name:'username',
        required: true,
         },
        {id:2,
        type:'password',
        name:'password',
        required: true,
        }]

    const inputsForm = inputs.map(input =>{
        return (
        <Input {...input} onChange={handleChange} value={user[input.name]} key={input.id}/>
        )
    })

    const handleLogin =async(e)=> { 
        try {
            e.preventDefault()
            const response = await loginUserServ(user)
            toast(response.data.message)
             setUser({
              username:'',
              password:''
            })
            dispatch(login())
            localStorage.setItem('userId', response.data.alreadyAnUser._id )
            navigate('/profile')
            if(response.data.alreadyAnUser.is_admin){
              dispatch(admin())
              navigate('/admin', { state: { id: response.data.alreadyAnUser._id } } )
            }
            
          } catch (error) {
            toast(error.response.data.message)
          }
      
        }
    return (
      <div className="main" >
        <form> 
        {inputsForm}
      <button onClick={handleLogin}>login</button>
      <a href='/reset-password' className="white">Forget your password?</a>
        </form>
      </div>
    );
  }

  
  
  export default Login;