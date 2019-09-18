import React, {Component} from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

const initialState = {
  taskName: '',
  assignee: ''
}

export default class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleChange = (event) => {
    this.setState({
      /*
        any name properties (from form) will be placed
        in the below array. Each element/name
        in the array will have a value that is the user's
        current input

        This way, we don't have to create TWO handleChange
        methods (one for just 'taskName' and the other
        just for 'assignee')
      */
      [event.target.name]: event.target.value
    })
  }

handleSubmit = async (event) => {
    /*
      prevent form from submitting and refreshing
      upon hitting the return/enter key
    */

    event.preventDefault()
    try {
      /*
        second argument in axios.post is req.body:

        {
          taskName: "",
          assignee: ""
        }

        ^ the above keys in this.state are the row names in database
      */
      const res = await axios.post('/api/todos', this.state)
      /*
        below, we're using the addToDo method from the
        <Todos /> component. This way, we're changing the
        state of array of todo items WITHOUT refreshing the page
      */
      this.props.addToDo(res.data)
      this.setState(initialState) // reset the form fields after submission
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    const { taskName, assignee } = this.state
    return (
      <TodoForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        /*
          don't have to do this.state.taskName
          or this.state.assignee because of above object
          destructuring from above (before the return statement)
        */
        taskName={taskName}
        assignee={assignee}
      />
    )
  }
}
