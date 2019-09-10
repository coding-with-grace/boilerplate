import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
  }

  async componentDidMount () {
    const res = await axios.get('/api/todos')
    this.setState({todos: res.data})
  }

  addToDo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }

  render () {
    return (
      <div id='todos'>
        <CreateTodo addToDo={this.addToDo} />
        {
          this.state.todos.map(todo => <Todo todo={todo} key={todo.id} />)
        }
      </div>
    )
  }
}
