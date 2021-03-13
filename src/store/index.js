import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { deviseReducer, initialState } from './reducers/token'

const rootReducer = combineReducers({
  devise: deviseReducer
})
// //
// const store = createStore(rootReducer, initialState)
// // export default store
// // // export default store = createStore(rootReducer, applyMiddleware(thunk))

// import { initialState } from './reducers/token'

export const store = createStore(rootReducer, initialState)
