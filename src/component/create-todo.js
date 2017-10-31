import React, { Component } from 'react';

class CreateTodo extends Component {
  render() {
    // console.log(this.props.task)
    return (
        <form>
            <input type="text" placeholder="What I need to do?" />
            <button>Create</button>
        </form>
    );
  }
}

export default CreateTodo;
