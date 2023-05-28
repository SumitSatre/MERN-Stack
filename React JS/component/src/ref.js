import React, {Component , createRef} from "react";

export default class User extends Component{
    constructor(){
        super();
        this.input = createRef();
    }

    componentDidMount(){
        console.log(this.input);
    }

    getVal(){
        this.input.current.value = "Sumit";
        // this.input.current.type = "number";
        this.input.current.style.color = "yellow";
        this.input.current.style.backgroundColor = "red";
    }

    render(){
        return(
            <>
            <h3> Ref in React Js </h3>
            <input type="text"  ref={this.input} />
            <button onClick={()=>this.getVal()}>Check Ref</button>
            </>
        );
    }
}