import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import _ from 'lodash'; //make easier call the method name

class TodosList extends Component {	
	renderItems (){
		// return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />); used this for lodash
		//return each TodosListItem with a key{}
		//each key has a separate index
		let tasks = this.props.todos;
		return tasks.map((todo, index) => <TodosListItem key={index} {...todo} />);
	}
  render() {
 		//console.log(this.props.todos);
    return (
      <table>
      	<TodosListHeader />
      		<tbody>
      			{this.renderItems()}
      		</tbody>
      </table>
    );
  }
}

export default TodosList;
