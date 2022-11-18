import React from "react";

class Header extends React.Component{

    render(){
        return (
            <div style={{backgroundColor: "green", paddingRight: "80%", paddingBottom: "20px", paddingTop: "20px"}}>
                <img style={{display: "inline", paddingLeft: "0px", paddingRight: "0px" }} alt="logo" src="http://localhost:3000/favicon.ico" width="80px"/>
                <h1 style={{display: "inline", paddingTop: "5px", paddingLeft: "10px", width: "100px"}}>Grade Calculator</h1>
            </div>
        )
    }
}

export default Header;