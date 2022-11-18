import React from 'react';

class ClassRow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            grade: ""
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8080/api/grade?className=${this.props.classObj.className}`)
        .then(resp => resp.json())
        .then((data) => {
            this.setState({ grade: data.grade })
        })
    }

    render () {
        return (
            <tr>
                <td><a href={`/class?class=${this.props.classObj.className}`}>{this.props.classObj.className}</a></td>
                <td>{this.state.grade}</td>
            </tr>
        )
    }
}

export default ClassRow;