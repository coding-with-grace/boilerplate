import React, {Component} from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

export default class UpdateTodo extends Component {
  constructor() {
    super()
    this.state = {
      taskName: '',
      assignee: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const todoId = this.props.todoId
    try {
      const res = await axios.put(`/api/todos/${todoId}`, this.state)
      this.props.updatedTodo(res.data)
      this.setState({
        taskName: '',
        assignee: ''
      })
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <TodoForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        taskName={this.state.taskName}
        assignee={this.state.assignee}
      />
    )
  }
}
