import React , {useState} from "react";

export default function Form(){
    
    let [name , setName] = useState(null);
    let [tnc , setTnc] = useState(false);
    let [interest , setInterest] = useState(""); 

    function getFormData(e){
        console.log(e);
        console.log(name , tnc , interest);
        e.preventDefault();
    }

    function clear(){
        setName("");
        setTnc(false);
        setInterest("");
    }

    return (
        <form onSubmit={getFormData}>
            <input type="text" placeholder="Enter name" 
            onChange={(e)=>setName(e.target.value)}/> <br/>

            <select onChange={(e)=>setInterest(e.target.value)}>
                <option> Select Option </option>
                <option> Marvel </option>
                <option> DC </option>
            </select> <br/>

            <input type="checkbox" /> <span>Accept Terms and Conditions</span>  <br/>

            <button type="submit" onChange={(e)=>setTnc(e.target.checked)}> submit </button>
            <button onChange={clear}> Clear </button>
        </form>
    );
}