import "./App.css";
import NewTodo from "./component/NewTodo";
// import Todo from './component/todo'
import Count from "./component/count";
// import Age from "./component/Age";
// import RenderProps from "./component/RenderProps";
// import { useCallback, useEffect, useMemo, useState } from "react";
import CounterContextProvider from "./context/CounterContextProvider";
import TodoContextProvider from "./context/TodoContextProvider";

function App() {
  // const {count}=useContext(CounterContext)
  // console.log({count})
  //   const [count, setCount]=useState(0)
  //   const handleCount =useCallback(()=>{
  //     setCount(prev=>prev+1)
  //   },[])
  //   useEffect(()=>{
  // console.log('i am in useEffect')

  // //   },[])
  // const ageCal = useMemo(()=>{
  //   for (let i=0; i<1000; i++)console.log(i)
  //   console.log('while loop is end')
  //   },[count])
  return (
    <>
      <h1>Hello world!</h1>
      <CounterContextProvider>
        {" "}
        <Count />
      </CounterContextProvider>
      <TodoContextProvider>
        <NewTodo />
      </TodoContextProvider>
      {/* <RenderProps >
      {(count,handleCounter)=><button onClick={handleCounter}> Counter:{count}</button>}
        </RenderProps> */}
      {/* {ageCal}
        
       
      <Age {...{handleCount}}/> */}
    </>
  );
}

export default App;
