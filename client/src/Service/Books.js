import axios from 'axios'

export const createBookServ = async(book)=>{
    const response = await axios.post('http://localhost:8001/book/', book)
    return response
}

export const getAllBooksServ = async()=>{
    const response = await axios.get('http://localhost:8001/book/')
    return response.data
}

export const getOneBookServ = async(isbn)=>{
    const response = await axios.get(`http://localhost:8001/book/${isbn}`)
    return response
}