import React, { Component } from 'react'
import Formtask from './Formtask'
import ListTask from './ListTask'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      list: [],
    }
    
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleAdd() {
    this.setState({
      ...this.state,
      description: '',
      list: [
        ...this.state.list,
        this.state.description
      ]
    })
  }

  render() {
    return (
      <div>     
      <Formtask 
      description={this.state.description}
      handleChange={this.handleChange}
      handleAdd={this.handleAdd}      
      />
      <ListTask />
    </div>
  )
}
}

