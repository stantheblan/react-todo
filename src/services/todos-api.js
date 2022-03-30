import axios from 'axios'
const URL = 'http://localhost:3001/todos'
export const getTodos = () => {
    return axios.get(URL)
}