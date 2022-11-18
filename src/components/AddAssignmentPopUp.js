import React from "react";

class AddAssignmentPopUp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            enabled: false,
            addAssignmentFormData: {
                assignmentName: "",
                className: "",
                assignmentWeight: "",
                assignmentScore: ""
            },
            message: null,
        }

        this.toggleEnabled = this.toggleEnabled.bind(this);
        this.onAssignmentNameChange = this.onAssignmentNameChange.bind(this);
        this.onClassNameChange = this.onClassNameChange.bind(this);
        this.onAssignmentWeightChange = this.onAssignmentWeightChange.bind(this);
        this.onAssignmentScoreChange = this.onAssignmentScoreChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.genMessage = this.genMessage.bind(this);
    }

    toggleEnabled(){
        let newEnabled = this.state.enabled ? false : true;

        this.setState({
            enabled: newEnabled
        });
    }

    onSubmit(event){
        
        let data = this.state.addAssignmentFormData;

        data.assignmentScore = parseFloat(data.assignmentScore);
        data.assignmentWeight = parseFloat(data.assignmentWeight);

        if(data.assignmentWeight === null || data.assignmentScore === null){
            this.setState({ message: "Failure"});
        } else {

            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            };

            console.log(JSON.stringify(data));

            fetch('http://localhost:8080/api/assignment', requestOptions)
            .catch((err) => this.setState({ message: "Failure"}))
            .then(resp => console.log(resp))
            .then(() => {
                this.setState({
                    addAssignmentFormData: {
                        assignmentName: "",
                        className: "",
                        assignmentWeight: "",
                        assignmentScore: ""
                    },
                    enabled: false,
                    message: "Success"
                })
            });
        }
        event.preventDefault();
    }

    onAssignmentNameChange(event){
        let newData = this.state.addAssignmentFormData;

        newData.assignmentName = event.target.value

        this.setState({
            addAssignmentFormData: newData
        });
    }
    onClassNameChange(event){
        let newData = this.state.addAssignmentFormData;

        newData.className = event.target.value;
        this.setState({
            addAssignmentFormData: newData
        });
    }
    onAssignmentWeightChange(event){
        let newData = this.state.addAssignmentFormData;

        newData.assignmentWeight = event.target.value;
        this.setState({
            addAssignmentFormData: newData
        });
    }
    onAssignmentScoreChange(event){
        let newData = this.state.addAssignmentFormData;

        newData.assignmentScore = event.target.value;
        this.setState({
            addAssignmentFormData: newData
        });
    }

    genMessage(){
        return (
            <p>{this.state.message === "Success" ? "Successfully added new Assignment" : "Failed to add assignment"}</p>
        )
    }

    addAssignmentForm(){
        return (
            <form style={{width: "50%", margin: "auto"}}>
                <table className="table table-hover">
                    <tbody>
                        <tr scope="row">
                            <td scope="col"><label htmlFor="assignmentName">Assignment Name</label></td>
                            <td scope="col"><input type="text" id="assignmentName" value={this.state.addAssignmentFormData.assignmentName} onChange={this.onAssignmentNameChange}/></td>
                        </tr>
                        <tr scope="row">
                            <td scope="col"><label htmlFor="className">Class Name</label></td>
                            <td scope="col"><input type="text" id="className" value={this.state.addAssignmentFormData.className} onChange={this.onClassNameChange}/></td>
                        </tr>
                        <tr scope="row">
                            <td scope="col"><label htmlFor="assignmentWeight">Assignment Weight</label></td>
                            <td scope="col"><input type="text" id="assignmentWeight" value={this.state.addAssignmentFormData.assignmentWeight} onChange={this.onAssignmentWeightChange}/></td>
                        </tr>
                        <tr scope="row">
                            <td scope="col"><label htmlFor="assignmentScore">Assignment Score</label></td>
                            <td scope="col"><input type="text" id="assignmentScore" value={this.state.addAssignmentFormData.assignmentScore} onChange={this.onAssignmentScoreChange}/></td>
                        </tr>
                    </tbody>
                </table>
                <button type='submit' style={{marginLeft: 0}} className="btn btn-primary" onClick={this.onSubmit}>Add</button>
            </form>
        )
    }

    render(){
        return (
            <div>
                <button className="btn btn-primary" onClick={this.toggleEnabled}>Add Assignment</button>
                {this.state.enabled ? this.addAssignmentForm() : null}
                {this.state.message !== null ? this.genMessage() : null}
            </div>
        )
    }
}

export default AddAssignmentPopUp;