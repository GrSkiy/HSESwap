import * as actionTypes from '../constants/exchangeMinors'

const initialState = {
  exchangeMinors: []
}

const exchangeMinors = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_EXCHANGE_MINORS:
      console.log('EXCHANGE MINOR Reducer Data', action)
      return Object.assign({}, state, {
        exchangeMinors: action.exchangeMinors
      })
    default:
      return state
  }
}

export default exchangeMinors
