/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext();
const reducer = (state, action) => {
  const {list,title,description}=state
  const actions = {
    Set_Title: { ...state, title: action.data },
    Set_Description: { ...state, description: action.data },
    Add_Todo: { title:'',description:'', list: [...list, {title,description}] },
    Clear_Todo: {title:'',description:'', list:[]},
  };
  return actions[action.type] || state;
};
const CountReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Custom_Increment":
      return state + action.payload;
    default:
      return state;
  }
};
const TodoContextProvider = ({ children }) => {
  const [todo, todoDispatch] = useReducer(reducer, {title:'',description:'',list:[]});
  const [count, countDispatch] = useReducer(CountReducer, 0);
  useEffect(()=>{
    localStorage.setItem('todo-list', JSON.stringify(todo.list))
  },[todo.list])
  return (
    <TodoContext.Provider value={{ todo, todoDispatch, count, countDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
