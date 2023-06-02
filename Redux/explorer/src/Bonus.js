import './App.css';
import {useState} from 'react';

function Account(){

    let [points , setAmount] = useState({amount : 0});

    return (
        <div className="Account">
            <h3> Bonus component </h3>
            <h2 className="heading">Total Amount : <span>${account.amount}</span></h2>

            <din className="btns">
                <button className="btn" onClick={()=>setAmount({amount : ++account.amount})}>Increment+</button>
                <button className="btn" onClick={()=>setAmount({amount : --account.amount})}>Decrement+</button>

                <button className="btn" onClick={()=>setAmount({amount : ++account.amount+10})}>Increement By 10+</button>
            </din>
        </div>
    );
}

export default Account;