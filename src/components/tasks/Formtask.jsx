import React from 'react'

export default props => ( 

    <div>
      <h1>Todo List</h1>
      <form>
        <input
        className='imput'
        type="text"
        placeholder="Descreva a sua tarefa"
        onChange={props.handleAdd}
        />   
      <button
      className='btn'
      type='submit'
      onClick={props.handleAdd}
      value={props.description}
      
      >
      Adicionar</button>
      </form>
    </div>
  )

