import {createSlice} from '@reduxjs/toolkit';

let initialState = {points : 0};

export const bonusSlice = createSlice({
    name:"bonus",
    initialState,
    reducers : {
        increment : (state)=>{
            state.points +=1 ; 
        }
    }
})

export const { increment} = bonusSlice.actions;

export default bonusSlice.reducer;