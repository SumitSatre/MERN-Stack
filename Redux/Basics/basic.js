import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from "axios";

const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulFilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';
const incBonus = 'bonus/increment';

let store = createStore(combineReducers({
    account: accountReducer,
    bonus: bonusReducer
}), applyMiddleware(logger.default, thunk.default));

const history = [];

function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
      case getAccUserFulFilled:
        return { amount: action.payload, pending:false };
      case getAccUserRejected:
          return {...state, error:action.error, pending:false  };
      case getAccUserPending:
              return { ...state,pending:true };
      case inc:
        return { amount: state.amount + 1 };
      case dec:
        return { amount: state.amount - 1 };
      case incByAmt:
        return { amount: state.amount + action.payload };
      default:
        return state;
    }
  }


  function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points:  state.points + 1 };
        case incByAmt:
            if(action.payload>=100)
              return { points:  state.points + 1 };
        default:
            return state;    
    }
}

// ation creaters
function IncrementByAmount(val) {
    return { 'type': "IncrementByAmount", 'payload': val };
}

setInterval(() => {
    console.log("Hi ");
    store.dispatch({'type': "Increase"});
    store.dispatch({'type': "Decrease"});
    store.dispatch({type : incByAmt , payload : 120});

}, 4000)



// Every time when the state changes it called
/*
store.subscribe(()=>{
    history.push(store.getState());
    console.warn(history);
}) 
*/

async function getData() {
    return async (dispatch, getState) => {
        try{
            dispatch(getAccountUserPending());
            const { data } = await axios.get(`http://localhost:5000`);
            dispatch(getAccountUserFulFilled(data.amount));
        } catch(error){
            dispatch(getAccountUserRejected(error.message));
        }
       
      };
}

// getData();