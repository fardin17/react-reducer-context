import {createStore,combineReducers,applyMiddleware} from 'redux'
import todoReducer from '../redux/reducer/todoReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const rootReducer= combineReducers({todo:todoReducer})
const middleware= applyMiddleware(thunk)
export const store = createStore(rootReducer,composeWithDevTools(middleware))
