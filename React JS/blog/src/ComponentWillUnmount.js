import React from "react";
import Client from "./Class_component";

/* when the component Client is removed from this page  componentWillUnmount from Client page will called*/

export default class User extends React.Component {

    constructor() {
        super();
        this.state = {
            show : true
        }
    }

    Toggle(){
        if(this.state.show){
            this.setState({show : false});
        }
        else{
            this.setState({show : true});
        }
    }

    render() {
        return (
            <div>
            {
                this.state.show? <Client /> : <h2> Component Removed </h2>
            }
            <button onClick={()=>this.Toggle()}> Toggle</button>
            </div>
        );
    }
}