import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const NewTodo = () => {
  const { todo, todoDispatch, count, countDispatch } = useContext(TodoContext);
  const [todo, todoDispatch] = useReducer(reducer, {title:'',description:'',list:[]});
  const { title, description, list } = todo;
  // useEffect(() => {
  //   const addtodo = () => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => todoDispatch({ type: "Add_Todo", }));
  //   };
  //   addtodo();
  // }, []);
  return (
    <div>
      <p>Todo</p>
      <input
        type="text"
        placeholder="Enter your title"
        value={title}
        onChange={(event) =>
          todoDispatch({ type: "Set_Title", data: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter your description"
        value={description}
        onChange={(event) =>
          todoDispatch({ type: "Set_Description", data: event.target.value })
        }
      />
      <button onClick={()=>todoDispatch({ type: "Add_Todo"})}>Add Todo</button>
      <p>
        {list.map((data, index) => (
          <p key={index}>{JSON.stringify(data)}</p>
        ))}
      </p>
      <button onClick={() => todoDispatch({ type: "Clear_Todo" })}>
        Clear
      </button>
      <h1>{count}</h1>
      <button onClick={() => countDispatch({ type: "Increment" })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "Decrement" })}>
        Decrement
      </button>
      <button
        onClick={() =>
          countDispatch({ type: "Custom_Increment", payload: Math.random() })
        }
      >
        Custom Increment
      </button>
    </div>
  );
};

export default NewTodo;
