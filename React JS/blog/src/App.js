import logo from './logo.svg';
import './App.css';
// import User from "./Functional_component";
// import Client from "./Class_component";
// import Mango from "./click_event";
// import Data from "./stateManagement";
// import Manage from "./stateManagement_class";
// import Student from "./props"; 
// import Student from "./props_With_Class";
// import Data from "./getData";
// import Toggle from "./hide_show_element";
// import Form from "./form_submit";
// import User from "./User" ;
// import LifeCycle from "./LifeCycle";
// import Unmount from "./ComponentWillUnmount";
// import UseEffect from "./useEffect";
// import UseCSS from "./useCSS";
 // import User from "./react_bootstrap";
 import User from "./Array_with_List";

function App() {

  function getData(){
    alert("Hi from another function");
  }

  return (
    <div className="App">
      <header className="App-header">
        <User />
      </header>
    </div>
  );
}

export default App;
