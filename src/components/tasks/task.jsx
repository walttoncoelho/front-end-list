import React, { useContext } from 'react'
import Formtask from './Formtask'
import ListTask from './ListTask'

import axios from 'axios'

const URL = 'http://localhost:3001/api/todos'
export default class Task extends React.Component {
  constructor(props) {
    super(props) 
    
    this.state = {
      description: '',
      list: []
    }
    
    
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()

  }

  refresh() {
    axios.get(`${URL}`)
      .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }


  handleAdd = (e) => {
   const description = this.state.description
   axios.post(`${URL}/${description}`)
     .then(resp => this.refresh())
 }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh())
  }

  render() {



    return (
      <div>     
      <Formtask 
      description={this.state.description}      
      handleChange={this.handleChange}
      handleAdd={this.handleAdd}      
      />
      <ListTask list={this.state.list}
      handleRemove={this.handleRemove}
      />
    </div>
  )
}
}

