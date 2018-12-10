import React, { Component } from 'react'



export default class InputBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            addInput: ''
        }
    }
    handleChange(val){
      this.setState({
        addInput: val
      })
    }
    addItem = (props) => {
        this.props.addItem(this.state.addInput)
          this.setState({
            addInput: ''
          })
        }
    
      render(){
          return(
              <div>
                <input
                placeholder='Add new item...'
                onChange={e => this.handleChange(e.target.value)}/>
                <button onClick={this.addItem}>Add</button>
              </div>
          )
      }
    
}