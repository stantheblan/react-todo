import { React, useState, useEffect } from 'react'
import { getTodos } from '../services/todos-api.js'

export function Todos() {
  const [todosArray, setTodos] = useState([]);
  useEffect(() => {
    getTodos()
    .then(res => setTodos(res.data))
  }, [])

  return (
    <div>
      <h1>Todos List</h1>
      {
        todosArray.map((e, i) => 
        {
            return (
              !e.complete ? <a href={`/${e._id}`} key={i}>{e.description}<br/></a> : null
            )
        })
      }
    </div>
  )
}