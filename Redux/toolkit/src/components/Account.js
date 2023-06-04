import '../App.css';
import {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { increment ,decrement ,  incrementByAmount  } from '../slices/accountSlice';

function Account(props){

    let amount = useSelector(state=>state.account.amount);
    let points = useSelector(state=>state.bonus.points);

    let dispatch = useDispatch();

    return (
        <div className="Account">
            <h3> Account component </h3>
            <h2 className="heading"> Amount : <span>${amount}</span></h2>

            <din className="btns">
                <button className="btn" onClick={()=>dispatch(increment())}>Increment+</button>
                <button className="btn" onClick={()=>dispatch(decrement())}>Decrement-</button>

                <button className="btn" onClick={()=>dispatch(incrementByAmount(10))}>Increement By 10+</button>
            </din>
        </div>
    );
}

export default Account;