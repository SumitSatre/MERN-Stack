import {useEffect , useState} from "react";

export default function Effect(){
    
    let [count , setCount] = useState(0);

    useEffect(()=>{
        console.warn("useEffect");
    })
    
    return(
        <div>
            <h1> {count} </h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
}