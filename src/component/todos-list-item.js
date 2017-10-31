import React, { Component } from 'react';

class TodosListItem extends Component {
  render() {
    // console.log(this.props.task)
    return (
        <tr>
            <td>{this.props.task}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
    	</tr>
    );
  }
}

export default TodosListItem;
