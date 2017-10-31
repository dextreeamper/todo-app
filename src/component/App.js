import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo'
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
		}
	}

  render() {
    return (
      <div className="App">
        <h1>React Todos App</h1>
        <CreateTodo />
				<TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
