import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodo, editTodo } from '../services/todos-api'

export function Edit() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [data, setData] = useState({})
  
    useEffect(() => {
        getTodo(id).then(res => setData(res.data))
    }, [])
    
    const updateTodo = (e) => {
        e.preventDefault()
        let obj = {description: e.target.description.value, complete:e.target.complete.checked}
        editTodo(id, obj)
        navigate('/')
    }
  return (
    <div>
      <form onSubmit={updateTodo}>
        <input type='text' name='description' defaultValue={data.description}/>
        <input type={'checkbox'} name='complete' defaultChecked={data.complete}/>
        <input type={'submit'}/>
      </form>
    </div>
  )
}