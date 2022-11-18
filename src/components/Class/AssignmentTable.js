import React from "react";
import AssignmentRow from './AssignmentRow';

class AssignmentTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            assignments: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8080/api/assignment?className=${this.props.className}`)
        .then(resp => resp.json())
        .then((assignments) => {
            this.setState({
                assignments: assignments
            })
        })
    }

    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Weight</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.assignments.map((assignment)=>(
                        <AssignmentRow key={assignment.assignmentName} assignment={assignment} />
                    ))}
                </tbody>
            </table>
        )
    }
}

export default AssignmentTable;