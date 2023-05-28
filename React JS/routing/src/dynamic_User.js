import { withRouter } from "react-router";

function User(props){

    return(
        <div>
            <h1> Use Component {props.match.params.id}</h1>
        </div>
    )
}

export default withRouter(User);