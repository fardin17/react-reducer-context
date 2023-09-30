import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const NewTodo = () => {
  const { todo, todoDispatch,count,countDispatch } = useContext(TodoContext);
  useEffect(() => {
    const addtodo = () => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => todoDispatch({ type: "Add_Todo", data: json }));
    };
    addtodo()
  }, []);
  return (
    <div>
      <p>Todo</p>
      <p> {todo.map((data,index)=><p key={index}>{JSON.stringify(data)}</p>)}</p>
      <button onClick={() => todoDispatch({ type: "Clear_Todo" })}>
        Clear
      </button>
      <h1>{count}</h1>
      <button onClick={()=>countDispatch({type:'Increment'})}>Increment</button>
      <button onClick={()=>countDispatch({type:'Decrement'})}>Decrement</button>
      <button onClick={()=>countDispatch({type:'Custom_Increment',payload:Math.random()})}>Custom Increment</button>
   
    </div>
  );
};

export default NewTodo;
