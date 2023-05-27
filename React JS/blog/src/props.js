export default function Student(props) {

    console.log(props);
    return(
        <div>
            <h1> Props </h1>
            <h2> Hello {props.name} id is {props.id}</h2>
        </div>
    );
}