import './App.css';
import {useState} from 'react';

function Account(increment , decrement , incrementByAmt , account , amount){

    return (
        <div className="Account">
            <h3> Account component </h3>
            <h2 className="heading"> Amount : <span>${amount}</span></h2>

            <din className="btns">
                <button className="btn" onClick={()=>increment()}>Increment+</button>
                <button className="btn" onClick={decrement}>Decrement+</button>

                <button className="btn" onClick={incrementByAmt}>Increement By 10+</button>
            </din>
        </div>
    );
}

export default Account;