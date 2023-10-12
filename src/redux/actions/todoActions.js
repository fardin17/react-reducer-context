
import { decrement, increment } from "../type/todoTypes"

export const  incrementCount=(value,dispatch)=>{
    // api call/ data modification
    dispatch({type:increment,payload:value*5})
}
export const  decrementCount=(dispatch)=>{
    dispatch({type:decrement})
}