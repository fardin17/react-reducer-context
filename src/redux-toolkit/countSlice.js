import { createSlice } from "@reduxjs/toolkit";
const CountSlice = createSlice({
    name:'count',
    initialState:0,
    reducers:{
        increment:(state,action)=> state=state+1,
        decrement:(state,action)=>state=state-1,
        customIncrement:(state,action)=>state=state+action.payload
    }
})
export const {increment,decrement,customIncrement}=CountSlice.actions
export default CountSlice.reducer 