import React, { Component } from 'react';

class TodosListItem extends Component {
    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);

        this.state = {
            isEditing: false
        }
    }
    renderActionSelection(){
        //this will be the layout when editing
        if(this.state.isEditing){
            return(
            <td>
                <button>Save</button>
                <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
            </td>  
            );
        }
        //this will be the default layout
        return(
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }
    renderTaskColor() {
        //converted to variable 'task'
        const { task, isCompleted } = this.props;
        //display the object
        // console.log(this.props);
        const styleColor = {
            //ternary operator on react if true = green, false = red
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        return (
            <td style={styleColor}
                onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </td>
        );
    }

  render() {
    // console.log(this.props.task)
    return (
        <tr>
            {/* <td>{this.props.task}</td> */}
            {this.renderTaskColor()}
            {this.renderActionSelection()}
    	</tr>
    );
  }


    //status of edit button after it was clicked
    onEditClick() {
        this.setState({ isEditing: true });
    }
    //back to original state
    onCancelClick() {
        this.setState({ isEditing: false });
    }

}

export default TodosListItem;
