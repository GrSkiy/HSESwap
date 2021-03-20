import { createStore, combineReducers, applyMiddleware } from 'redux'
import tokens from './reducers/tokens'
import filters from './reducers/filters'
import exchangeMinors from './reducers/exchangeMinors'
import data_from_api from './reducers/api'

const rootReducer = combineReducers({
  tokens,
  filters,
  exchangeMinors,
  data_from_api
})

const store = createStore(rootReducer)

export default store
