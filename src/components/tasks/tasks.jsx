import React, { Component } from "react";
import FormTask from "./FormTask";
import ListTask from "./ListTask";

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = { description:'', list:[]}

      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
  }
handleChange(e) {
  this.setState({...this.state, description: e.target.value});
}

  handleAdd(){
    console.log(this.state.description)
  }

  render() {
    return (     
        <div>          
            <FormTask
            description={this.state.description}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}/>        
            <ListTask />
        </div>      
    );
  }}