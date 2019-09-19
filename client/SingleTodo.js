import React, {Component} from 'react'
import Todo from './Todo'
import UpdateTodo from './UpdateTodo'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleTodo extends Component {
  constructor () {
    super()
    this.state = {
      todo: {}
    }
  }

  async componentDidMount () {
    // this.props.match.params.todoId is coming from backend?
    const todoId = this.props.match.params.todoId
    const res = await axios.get(`/api/todos/${todoId}`)
    this.setState({todo: res.data})
    console.log(this.state)
  }

  updateTodo = (updatedTodo) => {
    this.setState({
      todo: updatedTodo
    })
  }

  render () {
    const todo = this.state.todo

    return (
      <div id='single-todo'>
        <Todo todo={todo} />
        <UpdateTodo
          todoId={todo.id}
          updatedTodo={this.updateTodo}
        />
        <Link to='/'>Back</Link>
      </div>
    )
  }
}
