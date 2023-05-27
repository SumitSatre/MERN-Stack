import { useState } from "react";

export default function Data() {
    let [name, setData] = useState("Sumit");
    let [num, increase] = useState(0);

    function updateData() {
        setData("Harry");
        increase(++num);
    }

    return (
        <div>
            <h1> {name} </h1>
            <h2> {num} </h2>
            <button onClick={updateData}> Update Data </button>
        </div>
    );
}