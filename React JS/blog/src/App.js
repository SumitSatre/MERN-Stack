// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// import User from "./Functional_component";
// import Client from "./Class_component";
// import Mango from "./click_event";
// import Data from "./stateManagement";
// import Manage from "./stateManagement_class";
// import Student from "./props"; 
// import Student from "./props_With_Class";
 import Data from "./getData";
// import Toggle from "./hide_show_element";
// import Form from "./form_submit";
// import User from "./User" ;
// import LifeCycle from "./LifeCycle";
// import Unmount from "./ComponentWillUnmount";
// import UseEffect from "./useEffect";
// import UseCSS from "./useCSS";
// import User from "./react_bootstrap";
// import User from "./Array_with_List";
// import User from "./Array_with_List";
// import User from "./fragment";
// import User from "./send_data_from_child_to_parent";

function App() {

  function fun() {
    alert("You called function using props🥳🥳");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Data name={"Sumit"} f={fun} />
      </header>
    </div>
  );
}

export default App;
