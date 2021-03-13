import { createStore, combineReducers, applyMiddleware } from 'redux'
import tokens from './reducers/tokens'
import filters from './reducers/filters'
import exchangeMinors from './reducers/exchangeMinors'

const rootReducer = combineReducers({
  tokens,
  filters,
  exchangeMinors
})

const store = createStore(rootReducer)

export default store
