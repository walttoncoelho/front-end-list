import React from 'react'

export default props => ( 

    <div>
      <h1>Todo List</h1>
      <form>
        <input
        type="text"
        placeholder="Description"
        onChange={props.handleAdd}
        />   
      <button
      type='submit'
      onClick={props.handleAdd}
      value={props.description}
      
      >
      Adicionar</button>
      </form>
    </div>
  )

