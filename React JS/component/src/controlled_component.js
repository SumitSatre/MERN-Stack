import { useState } from "react"

export default function User(){

    let [name, setName] = useState();

    return (
        <>
        <h2> Controlled Component </h2>
        <h3> {name}</h3>
        <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={"Sumit Op"} />
        </>
    )
}