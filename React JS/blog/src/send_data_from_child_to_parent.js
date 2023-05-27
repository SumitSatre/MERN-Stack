
export default function User(props){

    const name =  "Sumit satre Op";
    const students = ["Sumit" , "saurabh" , "tejas" , "Aditya"];
    return (
        <>
            <h1> Sumit </h1>
            <button onClick={()=>props.data(name , students)} >Click</button>
        </>
    )
}

/*  This is parent function in App.js
import User from "./send_data_from_child_to_parent";

function App() {
  let [val , setVal] = useState("");
  let [arr , setArr] = useState(null);

  function getData(name , students){
    alert(`${name} is called`);
    setVal(name);
    setArr(students);
  }

  return (
    <div className="App">
      <header className="App-header">
        <User data={getData} />
        <div> Your name is {val} </div>
        <p> {arr} </p>
      </header>
    </div>
  );
}

export default App;


// https://react-bootstrap.github.io/getting-started/introduction/
*/