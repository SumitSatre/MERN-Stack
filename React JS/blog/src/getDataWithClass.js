import React from "react"

class Student extends React.Component {

    constructor(){
        super();
        this.state = {
            data : "",
            flag : false
        }
    }

    getData(val){
        this.setState({data : this.val.target.value})
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2> {data}</h2>
                <input type="text" onChange={this.getData}/>
            </div>
        );
    }
}

export default Student;

