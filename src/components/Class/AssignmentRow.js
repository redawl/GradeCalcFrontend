import React from "react";

class AssignmentRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <tr scope="row">
                <td scope="col">{this.props.assignment.assignmentName}</td>
                <td scope="col">{this.props.assignment.className}</td>
                <td scope="col">{this.props.assignment.assignmentWeight}</td>
                <td scope="col">{this.props.assignment.assignmentScore}</td>
            </tr>
        )
    }
}

export default AssignmentRow;