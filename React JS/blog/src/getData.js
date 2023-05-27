import React,{ useState } from "react";

function Data() {

    const [data, setData] = useState(null);
    const [print , setPrint] = useState(false);

    function getData(val) {
        setData(val.target.value);
        setPrint(false);
    }

    return (
        <div>
            {
                print? <h2> {data}</h2> :
                null
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(true)}>Click Me!</button>
        </div>
    );
}


export default Data;

