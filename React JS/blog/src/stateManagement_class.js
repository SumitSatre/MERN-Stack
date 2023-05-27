import React from "react";

export default class ClassState extends React.Component{
    
    constructor(){
        super();
        this.val = {
            data : 1
        }
    }

    apple(){
        this.setState({data : ++this.val.data});
    }

    render(){
        return(
            <div>
                <h1> {this.val.data} </h1>
                <button onClick={()=>this.apple()}>Click ME </button>
            </div>
        );
    }
}