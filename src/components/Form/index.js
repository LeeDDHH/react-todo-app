import React from 'react'
import './index.css'

const Form = ({value, onChange, onCreate, onKeyPress, color}) =>  {
    const form = "form";
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}} name={form}/>
            <div className="create-button" onClick={onCreate}>Add</div>
        </div>
    )
    
};

export default Form;