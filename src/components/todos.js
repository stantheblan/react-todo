import { React, useState, useEffect } from 'react'
import { getTodos } from '../services/todos-api.js'

function Todos() {

  const [todosArray, setTodos] = useState([]);

  useEffect(() => {
    console.log("here")
    getTodos()
    .then(res => setTodos(res.data))
    .then(console.log("here 2"))

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