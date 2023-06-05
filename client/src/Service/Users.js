import axios from 'axios'

const baseUrl = 'https://backend-vuk4.onrender.com'

export const signupUserServ = async(user)=>{
    const response = await axios.post(`${baseUrl}/user/signup`, user)
    return response
}

export const activateUserServ = async(token)=>{
    console.log({token})
    const response = await axios.post(`${baseUrl}/user/verify-email`, {token})
    console.log('aqui')
    return response
}

export const loginUserServ = async(user)=>{
    const response = await axios.post(`${baseUrl}/user/login`, user)
    return response
}

export const logoutUserServ = async()=>{
    const response = await axios.get(`${baseUrl}/user/logout`)
    return response
}

export const getProfileServ = async(id)=>{
    const response = await axios.get(`${baseUrl}/user/${id}`)
    return response
}

export const getAllUsersServ = async()=>{
    const response = await axios.get(`${baseUrl}/admin/dashboard/all-users`)
    return response
}

export const updateUserServ = async(id,user)=>{
    const response = await axios.put(`${baseUrl}/user/${id}`, user)
    return response 
}

export const deleteUserServ = async(id)=>{
    const response = await axios.delete(`${baseUrl}/user/${id}`)
    return response
}

export const banUserServ = async(id)=>{
    const response = await axios.put(`${baseUrl}/user/ban/${id}`)
    console.log('here')
    return response
}

export const resetPasswordServ = async(user)=>{
    const response = await axios.post(`${baseUrl}/user/reset-password`, user)
    return response
}

export const verifyPasswordServ = async(token)=>{
    const response = await axios.post(`${baseUrl}/user/verify-password`, {token})
    return response
}

export const BorrowBookServ = async(user, book)=>{
    const response = await axios.post(`${baseUrl}/user/${user}/borrow/${book}`)
    return response
}

export const ReturnBookServ = async(user, book)=>{
    const response = await axios.post(`${baseUrl}/user/${user}/return/${book}`)
    return response
}

export const QueueBookServ = async(user, book)=>{
    const response = await axios.post(`${baseUrl}/user/${user}/queue/${book}`)
    return response
}