/* eslint-disable react/prop-types */
import  { createContext, useReducer } from 'react'

export const TodoContext = createContext()
const reducer =(state,action)=>{
    const actions={
        'Add_Todo':[...state, action.data],
        'Clear_Todo':['Nothing']
    }
    return actions[action.type] || state
}
const CountReducer =(state,action)=>{
    switch(action.type){
      case 'Increment': return state+1;
      case 'Decrement': return state-1;
      case 'Custom_Increment': return state + action.payload;
      default: return state
    }
  }
const TodoContextProvider = ({children}) => {
    const [todo, todoDispatch]= useReducer(reducer, [])
    const [count, countDispatch]=useReducer(CountReducer,0)
  return (
    <TodoContext.Provider value={{todo,todoDispatch,count, countDispatch}}>{children}</TodoContext.Provider>
  )
};

export default TodoContextProvider