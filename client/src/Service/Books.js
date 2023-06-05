import axios from 'axios'

const baseUrl = 'https://backend-vuk4.onrender.com'


export const createBookServ = async(book)=>{
    const response = await axios.post(`${baseUrl}/book/`, book)
    return response
}

export const getAllBooksServ = async()=>{
    const response = await axios.get(`${baseUrl}/book/search`)
    return response.data
}

export const getAllBooksByPageServ = async(page)=>{
    const response = await axios.get(`${baseUrl}/book?page=${page}`)
    return response.data
}

export const getOneBookServ = async(isbn)=>{
    const response = await axios.get(`${baseUrl}/book/${isbn}`)
    return response
}

export const deleteBookServ = async(isbn)=>{
    const response = await axios.delete(`${baseUrl}/book/${isbn}`)
    return response
}

export const updateBookServ = async(isbn,book)=>{
    const response = await axios.put(`${baseUrl}/book/${isbn}`, book)
    return response
}