import { forwardRef } from "react";

function User(props , ref){

    return(
        <div>
        <input type="text" ref={ref} />
        </div>
    );
}

export default forwardRef(User);


/* 
import User from './forwardRef';
import React, {useRef } from "react";

function App() {

  const inputRef = React.useRef();

    function handleInput(){
        
      inputRef.current.style.color = "yellow";
      inputRef.current.style.backgroundColor = "red";
        // inputRef.current.style.display = "none";
    }

  return (
    <div className="App App-header">
      <User ref={inputRef} />

      <button onClick={()=>handleInput()}> Handle Input </button>
    </div>
  );
}

export default App;



*/