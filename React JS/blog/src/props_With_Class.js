import React from "react"

class Student extends React.Component {

    render() {
        return (
            <>
                <h2> {this.props.name} </h2>
                <button onClick={()=>this.props.f()} >Click</button>
            </>
        );
    }
}

export default Student;

