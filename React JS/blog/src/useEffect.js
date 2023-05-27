import {useEffect , useState} from "react";

export default function Effect(props){
    
    let [count , setCount] = useState(0);
    let [data , setData] = useState(0);

    /* When the state of data and count is updated this useEffect will be called */
    useEffect(()=>{
        console.warn("useEffect data");
    } , [data , count])

    /* When the state of count is updated this useEffect will be called */
    useEffect(()=>{
        console.warn("useEffect");
    } , [count])

    useEffect(()=>{ 
        console.warn("useEffect Props");
    } , [props.val , count])
    
    return(
        <div>
            <h1> {count} </h1>
            <h1> {data} </h1>
            <h1> {props.val} </h1>
            <button onClick={()=>setCount(count+1)}>Increase count</button>
            <button onClick={()=>setData(data+5)}>Increase data</button>
        </div>
    );
}