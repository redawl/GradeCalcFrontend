import React from 'react';
import ReactDOM from 'react-dom/client';
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
                console.log(classList)
                this.setState({
                    classes: classList
                })
            })
            .then(console.log(this.state.classes))
    }

    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Assignments</th>
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