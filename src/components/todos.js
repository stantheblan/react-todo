import { React, useState, useEffect } from 'react'
import { getTodos } from '../services/todos-api.js'
import { Show } from './Show'

function Todos() {

  const [todosArray, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
    .then(res => setTodos(res.data))
  }, [])

  console.log(todosArray)
  
  return (
    <div>
      <h1>Todos List</h1>
      {
        todosArray.map((e, i) => 
        {
            return (
              <a href={`/${e._id}`} key={i}>{e.description}<br/></a>
            )
        })
      }
    </div>
  )
}

export default Todos