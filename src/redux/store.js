import {createStore,combineReducers} from 'redux'
import todoReducer from '../redux/reducer/todoReducer'
const rootReducer= combineReducers({todo:todoReducer})
export const store = createStore(rootReducer)