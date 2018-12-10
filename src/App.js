import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import DeleteButton from './components/DeleteButton'
import InputBox from './components/InputBox'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addInput: '',
      editInput: '',
      todos: [],
      poke: []
    }
  }
  componentDidMount() {
    axios.get('/api/todos')
      .then(res => {
        console.log(res)
        this.setState({
          todos: res.data
        })
      })
    axios.get('https://pokeapi.co/api/v2/pokemon-form/132/')
      .then(res => {
        this.setState({
          poke: res.data
        })
      })
      }
  deletePost = (id) => {
    console.log('Delete event is working')
    console.log(this.state.input)

    axios.delete(`/api/todo/:${id}`, { text: this.state.input }).then(res => {
      console.log(res)
      this.setState({
        todos: res.data
      })
    })
  }
  updatePost(id) {
    console.log('Update Working')
    console.log(this.state.input)
    const updatedTodo = {
      text: this.state.editInput,
      id: id
    }
    axios.put(`/api/todo/:${id}`, updatedTodo).then(res => {
      console.log(res)
      this.setState({
        todos: res.data,
      })
    })
  }
  handleChange(val) {
    this.setState({
      addInput: val
    })
  }
  addItem = (text) => {
    axios.post(`/api/todo`, { text }
    )
      .then(res => {
        this.setState({
          todos: res.data
        })
      })
  }
  handleEditInput(val) {
    this.setState({
      editInput: val
    })
  }
  render() {
    console.log(this.state.editInput)
    const displayTodos = this.state.todos.map(todoItem => {
      console.log(todoItem)
      return (
        <div key={todoItem.id}>
          <ul>
            <li>
              {todoItem.text}

            </li>
          </ul>
          <DeleteButton deleteButton={this.deletePost} className='delete' />
          <input onChange={(e) => this.handleEditInput(e.target.value)} className='input'></input>
          <button onClick={() => this.updatePost()}> Edit </button>
        </div>

      )
    })
    // const displayPoke = this.state.poke.map(pokeItem => {
    //   return(
    //     <div key={pokeItem.id}>
    //       <ul>
    //         <li>
    //             {pokeItem}
    //         </li>
    //       </ul>
    //     </div>
    //   )
    // })
    return (
      <div className="App">
        <span className='title'>
          <h2> Simple List </h2>
        </span>
        <InputBox addItem={this.addItem} />
        {displayTodos}
        {/* {displayPoke} */}
      </div>
    );
  }
}

export default App;