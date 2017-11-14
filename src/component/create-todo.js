import React, { Component } from 'react';

class CreateTodo extends Component {
  render() {
    // console.log(this.props.task)
    return (
        <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="What I need to do?" ref="createInput" />
            <button>Create</button>
        </form>
    );
  }

 	handleCreate(event) {
 		//prevent default behavior of onSubmit refresh when submitting
 		event.preventDefault();
 		//display the input
 		//console.log(this.refs.createInput.value);
 		// console.log(this.props.createTask)
 		// this method is from main component
 		// refs display value on console
 		this.props.createTask(this.refs.createInput.value);
 		//clear the input after submitted
 		this.refs.createInput.value = '';

 	}
}

export default CreateTodo;
