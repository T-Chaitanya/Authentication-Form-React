import axios from 'axios'

const API = 'https://dummyjson.com/auth/login'

export const login = async (username, password) => {
    const response = await axios.post(API, {
        username,
        password
    })
    return response.data
}
export const register = async (userData) => {
    const response = await axios.post('https://dummyjson.com/users/add', userData)
    return response.data
}