import React, { Component } from 'react';

class TodosListItem extends Component {
    constructor(props) {
        super(props);

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
            <tr>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </tr>
        );
    }

  render() {
    // console.log(this.props.task)
    return (
        <tr>
            <td>{this.props.task}</td>
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
