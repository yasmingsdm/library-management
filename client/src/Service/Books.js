import axios from 'axios'

export const createBookServ = async(book)=>{
    const response = await axios.post('http://localhost:8001/book/', book)
    return response
}

export const getAllBooksServ = async()=>{
    const response = await axios.get('http://localhost:8001/book/search')
    return response.data
}

export const getAllBooksByPageServ = async(page)=>{
    const response = await axios.get(`http://localhost:8001/book?page=${page}`)
    return response.data
}

export const getOneBookServ = async(isbn)=>{
    const response = await axios.get(`http://localhost:8001/book/${isbn}`)
    return response
}

export const exportBooksExcel = async()=>{
    const response = await axios.get('http://localhost:8001/admin/dashboard/excel/book')
    return response
}

export const deleteBookServ = async(isbn)=>{
    const response = await axios.delete(`http://localhost:8001/book/${isbn}`)
    return response
}

export const updateBookServ = async(isbn,book)=>{
    const response = await axios.put(`http://localhost:8001/book/${isbn}`, book)
    return response
}