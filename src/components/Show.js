import { React, useState, useEffect } from 'react'
import { getTodos } from '../services/todos-api'
import { useNavigate } from 'react-router-dom'

export function Show() {
    const [data, setData] = useState({})

    useEffect(() => {
        getTodos()
        .then(res => res.data)
        .then(res => setData(res.find(e => e._id === window.location.pathname.slice(1))))
      }, [])
    const navigate = useNavigate();
  return (
    <div>
        {console.log()}
        <h1>{data.description}</h1><br/>
        {data.complete}
        Completed<input type={'checkbox'}/>
        <button onClick={() => {navigate("/")}}>Back</button>

    </div>
  )
}