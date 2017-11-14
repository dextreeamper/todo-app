import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo'
import _ from 'lodash';
import '../App.css';

const todos = [
{
	task: 'watching react tuts',
	isCompleted: true
},
{
	task: 'eat dinner',
	isCompleted: false
}
];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
			//todos: todos -> es6 code
		}
	}

  render() {
    return (
      <div className="App">
        <h1>React Todos App</h1>
        <CreateTodo createTask={this.createTask.bind(this)} />
				<TodosList 
					todos={this.state.todos} 
					toggleTask={this.toggleTask.bind(this)}
				/>
      </div>
    );
  }

  //this method change the isCompleted status when clicking the todo
  //find todo task that matches were passing in which is task that we clicked
  toggleTask(task) {
  	//find the todo that we clicked
  	const foundTodo = _.find(this.state.todos, todo => todo.task === task);
  	//swap the status of isCompleted
  	foundTodo.isCompleted = !foundTodo.isCompleted;
  	console.log(foundTodo);
  	//re-render the state
  	this.setState({ todos: this.state.todos });
  }

  //push all the task to todos state from input
  //push to react dom
  createTask(task) {
  	this.state.todos.push({
  		task,
  		isCompleted: false
  	});
  	//re-render this state with a new array
  	this.setState({ todos: this.state.todos });
  }

}

export default App;
