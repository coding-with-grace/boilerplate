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

  /*
    when we post a new item, we don't have to refresh
    to see the item we JUST added
  */

  addToDo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }

  removeToDo = async (todoId) => {
    try {
      await axios.delete(`/api/todos/${todoId}`)
      this.setState({
        /*
          filter -- keep todo items that DON'T have a todo.id
          (database info) that matches with todoId that was passed in
        */
        todos: this.state.todos.filter(todo => todo.id !== todoId)
      })
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <div id='todos'>
        <CreateTodo addToDo={this.addToDo} />
        {
          this.state.todos.map(todo => <Todo todo={todo} key={todo.id} removeToDo={this.removeToDo} />)
        }
      </div>
    )
  }
}
