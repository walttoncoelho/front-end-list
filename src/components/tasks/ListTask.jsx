import React from 'react'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td> 
        <td>
        <button 
        onClick={() => props.handleRemove(todo)}>          
          Delete
        </button>
          </td>      
          </tr>
          
         
    ))
  
            

  }
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>

    </table>
  )
}

