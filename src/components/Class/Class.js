import React from "react";
import AssignmentTable from './AssignmentTable';
import Header from '../Header';
import Footer from '../Footer';
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

            <div>
                <Header/>
                <AssignmentTable className={this.state.className}/>
                <Footer/>
            </div>
        )
    }
}

export default Class;