import React, { Component } from 'react'
import TodoItem from '../TodoItem/index'

export default class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      // 함수 파라미터를 비구조화 할당을 하여 객체 내부 값들에 대해 따로 레퍼런스 시킴
      ({id,text,checked,color}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
          color={color}
        />
      )
      // 이렇게도 쓸 수 있음.
      // (todo) => (
      //   <TodoItem
      //     {...todo}
      //     onToggle={onToggle}
      //     onRemove={onRemove}
      //     key={todo.id}
      //   />
      // )
    )

    return (
      <div>
        {todoList}
      </div>
    )
  }
}
