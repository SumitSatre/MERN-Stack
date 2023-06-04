import './App.css';
import Account from "./components/Account";
import Bonus from "./components/Bonus";

import {useSelector , useDispatch} from 'react-redux';
import { useState } from 'react';


function App() {

  let amount = useSelector(state=>state.account.amount);
  let points = useSelector(state=>state.bonus.points);

  return (
    <div className="App">
      <section>
        <h1> APP </h1>
        <h2> Current Amount : <span> ${amount}</span></h2>
        <h2> Total Bonus :  <span> ${points} </span></h2>
      </section>

      <section>
        <Account />
      </section>

      <section>
        <Bonus />
      </section>
    </div>
  );
}

export default App;
