import {increment,decrement} from '../type/todoTypes'
const initialState=0
const todoReducer = (state=initialState,action) => {
if(action.type===increment)return state+action.payload;
if(action.type===decrement)return state-1;
return state
}

export default todoReducer