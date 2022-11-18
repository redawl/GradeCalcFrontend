import React from 'react';
import ClassRow from './ClassRow';

class ClassTable extends React.Component {


    constructor(props){
        super(props)

        this.state = {
            classes: []
        }   
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/class')
            .then(resp => resp.json())
            .then((classList) => {
                this.setState({
                    classes: classList
                })
            });
    }

    render () {
        return (
            <table className="table table-hover" style={{margin: "auto", width: "50%", borderWidth: "2px"}}>
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Current Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.classes.length !== 0 ? this.state.classes.map((classObj) => (
                        <ClassRow key={classObj.className} classObj={classObj}/>
                    )) : null}
                </tbody>
            </table>
        )
    }
}

export default ClassTable;