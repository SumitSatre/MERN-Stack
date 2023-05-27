import { PureComponent } from "react";

export default class Component extends PureComponent{
    constructor(){
        super();
        this.state = {
            val : 1
        }
    }

    render(){
        console.warn("Re-remdering");
        return (
            <>
                <h2> Pure Component in React Js </h2>
                <h3> {this.state.val} </h3>

                <button onClick={()=>this.setState({val : this.state.val})}> Click Here</button>
            </>
        );
    }
}  