import React, { Component } from 'react'
import './index.css'

class RoutineItem extends Component {
  render() {
    const {id,text,onSelect,onRemove} = this.props;
    const name = "routine";
    return (
      <div className="routine-item" onClick={()=>onSelect(id)}>
        <div className="remove" name={name} onClick={(e) => {
          e.stopPropagation();
          onRemove(e,id);
        }}>&times;</div>
        {text}
      </div>
    )
  }
}

export default RoutineItem;
