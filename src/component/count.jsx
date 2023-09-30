// import withCounter from "./hoc/withCounter";

import { useContext } from "react";
import { CounterContext } from "../context/CounterContextProvider";

const Count = () => {
 const {count,dispatch}=useContext(CounterContext)
  return (
    <div>
      <p className="Counter">count</p>
      <p>{count}</p>
      <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
      <button onClick={()=>dispatch({type:'Custom_Increment',payload:Math.random()})}>Custom Increment</button>
    </div>
  );
};

export default Count;
