import { useRef } from "react";

export default function Ref(){

    let input = useRef();

    function handleInput(){
        console.log(input);
        input.current.value = "Sumit Op";
        input.current.focus();
        
        input.current.style.color = "yellow";
        input.current.style.backgroundColor = "red";
        // input.current.style.display = "none";
    }

    return(
        <>
        <h2> useRef in react js </h2>
        <input type="text" ref={input} />

        <button onClick={()=>handleInput()}> Handle Input </button>
        </>
    );
}
