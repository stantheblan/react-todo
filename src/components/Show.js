import { React, useState, useEffect } from 'react'
import { getTodos } from '../services/todos-api'
import {Todo} from './Todo'

export default function Show() {
    const [data, setData] = useState({})

    useEffect(() => {
        getTodos()
        .then(res => res.data)
        .then(res => setData(res.find(e => e._id === window.location.pathname.slice(1))))
      }, [])

  return (
    <div>
        {<Todo description = {data.description}/>}
    </div>
  )
}