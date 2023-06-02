import './App.css';
import Account from "./Account";
import Bonus from "./Bonus";

import { useState } from 'react';


function App() {

  let [account , setAmount] = useState({amount : 0});
    
    function increment(){
      setAmount({amount : ++account.amount});
    };
    function decrement(){setAmount({amount : --account.amount})} ;
    function incrementByAmt(){setAmount({amount : ++account.amount+10})};


  return (
    <div className="App">
      <section>
        <h3> APP </h3>
        <h2> Create Amount : </h2>
        <h2> Total Amount : </h2>
      </section>

      <section>
        <Account increment={()=>increment} decrement={decrement} incrementByAmt={incrementByAmt}  account={account} amount={account.amount}/>
      </section>

      <section>
      <Bonus />
      </section>
    </div>
  );
}

export default App;
