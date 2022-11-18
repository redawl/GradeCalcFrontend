import React from 'react';
import ClassTable from './ClassTable';
import Header from '../Header';
import Footer from '../Footer';
import AddAssignmentPopUp from '../AddAssignmentPopUp';


class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header/>
                <ClassTable/>
                <AddAssignmentPopUp/>
                <Footer/>
            </div>
        )
    }
}

export default Main;