/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from 'react'

export const CounterContext=createContext()
const reducer =(state,action)=>{
  switch(action.type){
    case 'Increment': return state+1;
    case 'Decrement': return state-1;
    case 'Custom_Increment': return state + action.payload;
    default: return state
  }
}

const CounterContextProvider = ({children}) => {
  const [count, dispatch]=useReducer(reducer,0)
  const [counter, setCounter]=useState(0)
  // const handleCount =()=>{
  //   setCount(prev=>prev+1)
  // }
  return (
    <CounterContext.Provider value={{count,dispatch}}>{children}</CounterContext.Provider>
  )
}

export default CounterContextProvider