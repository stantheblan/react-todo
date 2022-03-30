import { React, useState, useEffect } from 'react'
import { getTodos } from '../services/todos-api.js'
import {Todo} from './Todo'

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
              <Todo key={i} description={e.description} completed={e.completed}/>
            )
        })
      }
    </div>
  )
}

export default Todos