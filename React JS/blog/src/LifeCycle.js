import React from "react";
import Comp from "./Functional_component";

export default class User extends React.Component {

    constructor() {
        super();
        this.state = {
            count : 0
        }

        this.val = {
            ren : 0
        }
        console.log("constructor");
    }
    
    componentDidMount(){
        console.log("componentDidMount");
    }
    
    componentDidUpdate(preProps , preState , snapshot){
        console.log("componentDidUpdate" , preState , this.state.count);
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate" , this.state.count);

        if(this.state.count>5 && this.state.count<=10){
            return true;
        }
        // by default
        return false;
    }
    /* When it in 5 to 10 then the it rendered else it does not render */
    /* shouldComponentUpdate if it returns false the page not render as well as componentDidUpdate not called */
    /* shouldComponentUpdate if it returns true the page render as well as componentDidUpdate called */
    /* It decides the page will render and update or not if false then no if true then yes */

    render() {
        console.log("render");
        return (
            <div>
            <h1>Hello</h1>
            <h3> {++this.val.ren}</h3>
            <button onClick={()=>this.setState({count : this.state.count+1})}>Click me</button>
            </div>
        );
    }
}

/* Here when we click on button the state is updated hence the render page is updated (re-rendered) and 
componentDidUpdate is called. */

/* render returns twice in react js?
    The reason why this happens is an intentional feature of the React StrictMode. It only happens in development mode and should help to find accidental side effects in the render phase.
*/