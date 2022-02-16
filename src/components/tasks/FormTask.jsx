import React from 'react'

export default props=> {
  return (
    <div>
        <div className='form-group'>
            <label htmlFor='description'></label>
            <input type='text' className='form-control' id='description' placeholder='Título da tareffa' />

            <label htmlFor='responsible'></label>
            <input 
            type='text'
            className='form-control'
            id='responsible'
            placeholder='Descreva uma tarefa'
            onChange={props.handleChange}
            value={props.description}
            />
    </div>
    <button
    type='submit'    
    onClick={props.handleAdd}
    >Adicionar
    </button>
    </div>
  )
}
