import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tokens from './reducers/tokens'
import filters from './reducers/filters'
import data_from_api from './reducers/api'
import userInfo from './reducers/user'
import exchangeMinors from './reducers/exchangeMinors'
import usersExchanges from './reducers/usersExchanges'

const rootReducer = combineReducers({
  tokens,
  usersExchanges,
  // filters,
  exchangeMinors,
  userInfo,
  data_from_api
})

const store = createStore(rootReducer, applyMiddleware(thunk))
// const store = createStore(rootReducer)

export default store
