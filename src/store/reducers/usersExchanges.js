import * as actionTypes from '../constants/usersExchanges'

const initialState = {
  usersExchanges: []
}

const usersExchamges = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_EXCHANGES:
      console.log('UPDATE_EXCHANGES Reducer Data', action)
      return Object.assign({}, state, {
        usersExchanges: action.exchanges
      })
    default:
      return state
  }
}

export default usersExchamges
