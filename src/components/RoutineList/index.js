import React, { Component } from 'react';
import RoutineItem from '../RoutineItem/index';
import RoutineHead from '../RoutineHead/index';
import RoutineForm from '../RoutineForm/index';

class RoutineList extends Component {
    render() {
        const {value,routines,onSelect,onToggle,tempdisp,onChange,onCreate,onKeyPress,onRemove} = this.props;
        const routineList = routines.map(
            ({id_r,text}) => (
                <RoutineItem id={id_r} key={id_r} text={text} onSelect={onSelect} tempdisp={tempdisp} onRemove={onRemove}/>
            )
        )
        const routineForm =  <RoutineForm value={value} onChange={onChange} onCreate={onCreate} onKeyPress={onKeyPress}/>
        
        return (
            <div>
                <RoutineHead onToggle={onToggle}/>
                {/* {(()=>{
                    if(tempdisp){
                        return routineForm
                    }
                })()}
                {(()=>{
                    if(tempdisp){
                        return routineList
                    }
                })()} */}
                {tempdisp ? routineForm : ''}
                {tempdisp ? routineList : ''}

            </div>
        );
    }
}

export default RoutineList;