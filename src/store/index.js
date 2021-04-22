import { createStore, combineReducers, applyMiddleware } from 'redux'
import tokens from './reducers/tokens'
import filters from './reducers/filters'
import data_from_api from './reducers/api'
import userInfo from './reducers/user'

const rootReducer = combineReducers({
  tokens,
  filters,
  userInfo,
  data_from_api
})

const store = createStore(rootReducer)

export default store
