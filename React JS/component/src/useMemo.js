import { useState , useMemo } from "react";

export default function User(){

    let [count, setCount] = useState(1);
    let [data, setData] = useState(1);
    

    const multiCountMemo = useMemo(()=>{
        console.warn("multiCount");
        return count*5;
    }, [count])

    return (
        <>
            <h3> {data} </h3>
            <h3> {multiCountMemo} </h3>
            <h3> {count} </h3>

            <button onClick={()=>setData(data+1)}>data</button>
            <button onClick={()=>setCount(count*5)}>count</button>
        </>
    );
}

/* Let suppose we create a function in the return statement then if state of any variable props is updated the return will be re-rendered and then function is called again to avoid this problem we use useMemo */