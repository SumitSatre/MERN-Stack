import { useState } from "react";

export default function Toggle(){

    let [flag , setFlag] = useState(true);

    function toggle(){
        if(flag){
            setFlag(false)
        }
        else{
            setFlag(true)
        }
    }

    return(
        <div>
            <button onClick={()=>setFlag(false)}> Hide </button>
            <button onClick={()=>setFlag(true)}> Show </button>
            <button onClick={()=>toggle()}> toggle </button>
            
            {
                flag? <p> Hi my name is Sumit Satre </p> :
                null
            }
        </div>
    );
} 