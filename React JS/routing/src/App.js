import './App.css';
import React, {useState} from 'react'

function App() {
  let [data , setData ] = useState([]); 

  fetch("http://localhost:5000").then((result)=>{
    result.json().then((resp)=>{
      setData(resp);
    })
  })

  return (
    <div className="App">
      <h3> Your data : </h3>
      <p> {data} </p>
    </div>
  );
}
export default App;