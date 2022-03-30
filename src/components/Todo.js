import React from 'react'

export function Todo(task) {
  return (
    <div>
    {task.description}<br/>
    {task.completed}
    </div>
  )
}