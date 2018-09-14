import React from 'react'
import './index.css'

const RoutineForm = ({value, onChange, onCreate, onKeyPress}) =>  {
    const form = "form_routine";
    return(
        <div className="form-template">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} name={form}/>
            <div className="create-button" onClick={onCreate}>Add</div>
        </div>
    )
    
};

export default RoutineForm;