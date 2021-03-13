import { createStore, combineReducers, applyMiddleware } from 'redux'
import token from './reducers/token'

const rootReducer = combineReducers({
  token
})

const store = createStore(rootReducer)
console.log('Initial Store State', store.getState())

export default store
