import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/index';
import Form from './components/Form/index';
import TodoItemList from './components/TodoItemList/index';
import Palette from './components/Palette/index';
import RoutineList from './components/RoutineList/index';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      id_r:0,
      input:'',
      input_template:'',
      todos: [
      ],
      color:'#343a40',
      routines: [
      ],
      tempdisp:true
    }
  }

  input_flg;

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.id !== nextState.id){
      localStorage.setItem('id',JSON.stringify(nextState.id));
    }
    if(this.state.id_r !== nextState.id_r){
      localStorage.setItem('id_r',JSON.stringify(nextState.id_r));
    }
    if(this.state.todos !== nextState.todos){
      localStorage.setItem('todos',JSON.stringify(nextState.todos));
    }
    if(this.state.routines !== nextState.routines){
      localStorage.setItem('routines',JSON.stringify(nextState.routines));
    }
    if(this.state !== nextState){
      return true;
    } 
    return false;
  }

  componentDidMount(){
    if(localStorage.todos){
      const id = JSON.parse(localStorage.id);
      const id_r = JSON.parse(localStorage.id_r);
      const todos = JSON.parse(localStorage.todos);
      const routines = JSON.parse(localStorage.routines);
      this.setState({
        id:id,
        id_r:id_r,
        todos: todos.map(todo => ({
          id:todo.id,
          text:todo.text,
          checked:todo.checked,
          color:todo.color
        })),
        routines: routines.map(routine => ({
          id_r:routine.id_r,
          text:routine.text
        }))
      })
    }
  }

  handleChange = (e) => {
    this.handleFlg(e);
    if(this.input_flg === 'form'){
      this.setState({
        input:e.target.value
      })
    }
    if(this.input_flg === 'form_routine'){
      this.setState({
        input_template:e.target.value
      })
    }
  }

  handleCreate = (e) => {
    this.handleFlg(e);
    const { id, id_r, input, todos, color, input_template, routines } = this.state;
    if(input !== '' && this.input_flg === 'form'){
      this.setState({
        id:id +1,
        input:'',
        todos: todos.concat({
          id:id,
          text:input,
          checked:false,
          color: color
        })
      })
    }
    if(input_template !== '' && this.input_flg === 'form_routine'){
      this.setState({
        id_r:id_r +1,
        input_template:'',
        routines: routines.concat({
          id_r:id_r,
          text:input_template
        })
      })
    }
    this.input_flg = '';
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate(e);
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];


    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos:nextTodos
    })
  }

  handleRemove = (e,id) => {
    const {todos, routines} = this.state;
    const name = e.target.getAttribute('name');
    if(name === 'todo'){
      this.setState({
        todos: todos.filter(todo => todo.id !== id)
      })
    }

    if(name === 'routine'){
      this.setState({
        routines: routines.filter(routine => routine.id_r !== id)
      })
    }
  }

  handleSelectColor = (color) => {
    this.setState({
      color: color
    })
  }

  handleSelectRoutine = (id_r) => {
    const {routines} = this.state;
    const index = routines.findIndex(routine => routine.id_r === id_r);
    const selected = routines[index];
    this.setState({
      input: selected.text
    })
  }

  handleToggleRoutine = () => {
    const {tempdisp} = this.state;
    this.setState({
      tempdisp: !tempdisp
    })
  }

  handleFlg = (e) => {
    this.input_flg = typeof e.target.name === "undefined" ? e.target.parentNode.querySelector('input').name : e.target.name;
  }

  render() {
    const { input, input_template, todos, color, routines, tempdisp } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor,
      handleSelectRoutine,
      handleToggleRoutine
    } = this;
    return (
      <TodoListTemplate
      form={
          <Form
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
            color={color}
          />
      }
      routine={
          <RoutineList
            value={input_template}
            tempdisp={tempdisp}
            routines={routines}
            onSelect={handleSelectRoutine}
            onToggle={handleToggleRoutine}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
            onRemove={handleRemove}
          />
      }
      palette={
          <Palette
            colors={colors}
            selected={color}
            onSelect={handleSelectColor}
          />
      }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
