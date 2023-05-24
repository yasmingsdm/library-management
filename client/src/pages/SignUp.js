import { useState } from "react";
import { toast } from "react-toastify";

import Input from "../components/Input";
import { signupUserServ } from "../Service/Users";


function SignUp() {
    const [user, setUser] = useState({
        name: '',
        email:'',
        password: '',
        username:''
    });

    const handleChange= (e)=>{
        setUser(prevUser => {
            return {...prevUser, [e.target.name]: e.target.value}
        })
    }

    const inputs = [
        {id:0,
        type:'text',
        name:'name',
        required: true,
        },
        {id:1,
        type:'email',
        name:'email',
        required: true,
         },
        {id:2,
        type:'password',
        name:'password',
        required: true,
        },
        {id:3,
        type:'text',
        name:'username',
        required: true,
        }]

    const inputsForm = inputs.map(input =>{
        return (
        <Input {...input} onChange={handleChange} value={user[input.name]} key={input.id}/>
        )
    })
    const handleSignup =async(e)=> { 
    try {
        e.preventDefault()
        const response = await signupUserServ(user)
        toast(response.data.message)
         setUser({
          name: '',
          email:'',
          password:'',
          username:''
        })
      } catch (error) {
        toast(error.response.data.message)
      }
  
    }
    return (
      <div className="main">
        <form action='' >
            {inputsForm}
        </form>
       <button onClick={handleSignup} >Signup</button>
      </div>
    );
  }
  
  export default SignUp;