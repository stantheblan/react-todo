import axios from 'axios'
export const createTodo = item => {
    const URL = `http://localhost:3001/todos/`
    return axios.post(URL, item)
}
export const getTodo = id => {
    const URL = `http://localhost:3001/todos/${id}`
    return axios.get(URL)
}
export const getTodos = () => {
    const URL = `http://localhost:3001/todos`
    return axios.get(URL)
}
export const deleteTodo = id => {
    const URL = `http://localhost:3001/todos/${id}`
    return axios.delete(URL)
}
export const editTodo = (id, eProd) => {
    const URL = `http://localhost:3001/todos/${id}`
    return axios.put(URL, eProd)
}
