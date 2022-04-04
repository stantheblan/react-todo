import { React, useState, useEffect } from 'react'
import { deleteTodo, getTodo } from '../services/todos-api'
import { useNavigate, useParams } from 'react-router-dom'

export function Show() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [data, setData] = useState({})

  useEffect(() => {
      getTodo(id).then(res => setData(res.data))
  }, [])

  const deleteTheTodo = () => {
    deleteTodo(id)
    navigate("/")
  }
  
  return (
    <div>
        <h1>{data.description}</h1><br/>
        Completed<input type={'checkbox'} defaultChecked={data.complete} disabled/>
        <br/>
        <button onClick={deleteTheTodo}>Delete</button>
        <button onClick={()=>{navigate(`/${id}/edit`)}}>Edit</button>
    </div>
  )
}