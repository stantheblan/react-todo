import React from 'react'

export function Todo(task) {
  return (
    <div>
      <h1>Todo Item</h1>
    <a href={`/${task.id}`}><h1>{task.description}</h1></a><br/>
    {task.complete}
    </div>
  )
}
