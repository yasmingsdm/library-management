import axios from 'axios'

export const signupUserServ = async(user)=>{
    const response = await axios.post('http://localhost:8001/user/signup', user)
    return response
}

export const activateUserServ = async(token)=>{
    const response = await axios.post('http://localhost:8001/user/verify-password', token)
    return response
}

export const loginUserServ = async(user)=>{
    const response = await axios.post('http://localhost:8001/user/login', user)
    return response
}