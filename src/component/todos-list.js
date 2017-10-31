import React, { Component } from 'react';
import TodoListHeader from './todos-list-header';

class TodoList extends Component {	
  render() {
 		console.log(this.props.todos);

    return (
      <table>
      	<TodoListHeader />
      </table>
    );
  }
}

export default TodoList;
