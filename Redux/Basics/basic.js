import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from "axios";

const init = "init";
const inc = "Increase";
const de = "Decrease";
const IncByAmt = "IncrementByAmount";

let store = createStore(combineReducers({
    account: accountReducer,
    bonus: bonusReducer
}), applyMiddleware(logger.default, thunk.default));

const history = [];

function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case init:
            return { amount: state.payload };

        case inc:
            return { amount: state.amount + 1 };

        case de:
            return { amount: state.amount - 1 };

        case IncByAmt:
            return { amount: state.amount + state.payload };

        default:
            return { state };
    }
}

function bonusReducer(state = { points: 0 }, action) {

    switch (action.type) {
        case init:
            return { points: state.payload };

        case inc:
            return { points: state.points + 1 };

        case de:
            return { points: state.points - 1 };

        case IncByAmt:
            return { points: state.points + state.payload };

        default:
            return { state };
    }
}

// ation creaters
function IncrementByAmount(val) {
    return { 'type': "IncrementByAmount", 'payload': val };
}

setInterval(() => {
    // console.log("Hi ");
    // store.dispatch({'type': "Increase"});
    // store.dispatch({'type': "Decrease"});
    store.dispatch({type : IncByAmt , payload : 120});

}, 4000)


// Every time when the state changes it called
/*
store.subscribe(()=>{
    history.push(store.getState());
    console.warn(history);
}) 
*/

async function getData() {
    const data = await axios.get("http://localhost:5000");
    console.log(data);
}

// getData();