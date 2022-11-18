import React from "react";

class AssignmentRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <tr>
                <td>{this.props.assignment.assignmentName}</td>
                <td>{this.props.assignment.className}</td>
                <td>{this.props.assignment.assignmentWeight}</td>
                <td>{this.props.assignment.assignmentValue}</td>
            </tr>
        )
    }
}

export default AssignmentRow;