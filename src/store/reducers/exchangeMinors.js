import * as actionTypes from '../constants/exchangeMinors'

const initialState = {
  entities: []
}

const exchangeMinors = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_EXCHANGE_MINORS:
      console.log('EXCHANGE MINOR Reducer Data', action)
      return Object.assign({}, state, {
        entities: action.exchangeMinors
      })
    default:
      return state
  }
}

export default exchangeMinors
