import '../App.css';
import {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {increment} from "../slices/bonusSlice";

function Bonus(props){

    let amount = useSelector(state=>state.account.amount);
    let points = useSelector(state=>state.bonus.points);

    let dispatch = useDispatch();

    return (
        <div className="Account">
            <h3> Bonus component </h3>
            <h2 className="heading">Total points : <span>${points}</span></h2>

            <din className="btns">
                <button className="btn" onClick={()=>dispatch(increment(50))}>Increment+</button>
            </din>
        </div>
    );
}

export default Bonus;