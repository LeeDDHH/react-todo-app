import React from 'react'
import './index.css'

const TodoItem = ({text, checked, id, onToggle, onRemove, color}) => {

    const name = "todo"
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" name={name} onClick={(e)=> {
            e.stopPropagation();
            onRemove(e,id)}
        }>&times;</div>
        <div style={{color}} className={`todo-text ${checked ? 'checked' : ''}`}>
            <div>{text}</div>
        </div>
        {checked ? (<div className="check-mark">✓</div>) : ''}
      </div>
    )
}

export default TodoItem;