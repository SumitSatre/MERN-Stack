export default function User(props){

    return(
        <div>
            <button onClick={props.func}>Click</button>
        </div>
    )
}

/* 
import User from "./User" ;

function App() {

  function getData(){
    alert("Hi from another function");
  }

  return (
    <div className="App">
      <header className="App-header">
        <User func = {getData} />
      </header>
    </div>
  );
}

export default App;

*/