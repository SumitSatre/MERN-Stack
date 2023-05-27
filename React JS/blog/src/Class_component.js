import React from "react"

class Client extends React.Component{

    componentWillUnmount(){
        alert("componentWillUnmount");
    }

    
    render(){
        return(
            <h1> Hello from client </h1>
        );
    }
}

export default Client;