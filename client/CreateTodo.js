import React, {Component} from 'react'
import axios from 'axios'

export default class CreateTodo extends Component {
  constructor(props) {
    super(props)
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
    try {
      const res = await axios.post('/api/todos', this.state)
      this.props.addToDo(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    const { taskName, assignee } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="taskName">Task Name:</label>
        {/* don't have to do this.state.taskName because of object destructuring above */}
        <input onChange={this.handleChange} name="taskName" type="text" value={taskName} />

        <label htmlFor="assignee">Assign To:</label>
        <input onChange={this.handleChange} name="assignee" type="text" value={assignee} />

        <button type="submit">Submit</button>
      </form>
    )
  }
}
