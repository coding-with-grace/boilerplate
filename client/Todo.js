import React from 'react'
import {Link} from 'react-router-dom'

const Todo = (props) => {
  const todo = props.todo
  const todoId = todo.id

  return (
    <div className='todo row' key={todo.id}>
      <div className='column'>
        <Link to={`/todos/${todo.id}`}>
          <h3>{todo.taskName}</h3>
        </Link>
        <p>Assigned to: {todo.assignee}</p>
      </div>
      <div className='column'>
        {/* IF there is a props.removeToDo (which would
        be passed from Todo.js (all todos/main page), show remove button
        Otherwise, button won't show up (which is when this Todo component is shown in SingleTodo.js)
        */}
        {
          props.removeToDo && <button onClick={() => props.removeToDo(todoId)} className='remove'>Remove</button>
        }
      </div>
    </div>
  )
}

export default Todo
