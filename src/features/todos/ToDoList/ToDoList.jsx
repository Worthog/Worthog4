import React, { Component } from 'react';
import ToDoListItem from './ToDoListItem';

class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos && todos.map(todo => (
          <ToDoListItem
            key={todo.id}
            todo={todo}            
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
