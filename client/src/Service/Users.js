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

export const logoutUserServ = async()=>{
    const response = await axios.get('http://localhost:8001/user/logout')
    return response
}

export const getProfileServ = async()=>{
    const response = await axios.get('http://localhost:8001/user/')
    return response
}

export const getAllUsersServ = async()=>{
    const response = await axios.get('http://localhost:8001/admin/dashboard/all-users')
    return response
}

export const exportUsersExcel = async()=>{
    const response = await axios.get('http://localhost:8001/admin//dashboard/excel/user')
    return response
}