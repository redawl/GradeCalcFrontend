import React from "react";
import AssignmentTable from './AssignmentTable';
import queryString from 'query-string';

class Class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            className: queryString.parse(window.location.search).class
        }
    }

    render(){
        return (
            <AssignmentTable className={this.state.className}/>
        )
    }
}

export default Class;