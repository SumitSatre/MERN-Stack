import '../App.css';
import {useState} from 'react';
import {incrementBonus} from "../actions/index"
import {useSelector , useDispatch} from 'react-redux';

function Bonus(props){

    let amount = useSelector(state=>state.account.amount);
    let points = useSelector(state=>state.bonus.points);

    let dispatch = useDispatch();

    return (
        <div className="Account">
            <h3> Bonus component </h3>
            <h2 className="heading">Total points : <span>${points}</span></h2>

            <din className="btns">
                <button className="btn" onClick={()=>dispatch(incrementBonus(50))}>Increment+</button>
            </din>
        </div>
    );
}

export default Bonus;