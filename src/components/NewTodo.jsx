import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createTodo } from '../services/todos-api'

export function NewTodo() {
  let navigate = useNavigate()
  const addNew = (e) => {
      e.preventDefault()
      let obj = {description: e.target.description.value, complete:false}
      createTodo(obj)
      navigate('/')
  }
  return (
    <div>
      <form onSubmit={addNew}>
        <input type='text' name='description' />
        <input type={'submit'}/>
      </form>
    </div>
  )
}