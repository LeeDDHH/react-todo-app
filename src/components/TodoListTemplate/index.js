import React from 'react'
import './index.css';

const TodoListTemplate = ({form, palette, routine, children}) => {
    return(
      <main className="todo-list-template">
          <div className="title">
            Todo List
          </div>
          <section >
            { routine }
          </section>
          <section className="palette-wrapper">
            { palette }
          </section>
          <section className="form-wrapper">
            { form }
          </section>
          <section className="todos-wrapper">
            { children }
          </section>
      </main>
    );
  
}

export default TodoListTemplate;