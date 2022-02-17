import React from 'react'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td> 
        <td>
        <button
        className='delete'
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
          <th>Descrição</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>

    </table>
  )
}

