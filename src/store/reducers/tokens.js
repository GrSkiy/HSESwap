import * as actionTypes from '../constants/tokens'
import DB from '../../db'

const initialState = {
  deviceToken: '',
  authenticityToken: '',
  loaded: false
}

const tokens = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOKEN_FROM_DB:
      console.log('TOKENS Reducer data GET_TOKEN_FROM_DB', action)
      return Object.assign({}, state, {
        deviceToken: action.deviceToken,
        authenticityToken: action.authenticityToken,
        loaded: true
      })
    case actionTypes.UPDATE_TOKEN_IN_DB:
      console.log('TOKENS Reducer data UPDATE_TOKEN_IN_DB', action)

      // DB.updateToken(action.deviceToken, action.authenticityToken)

      return Object.assign({}, state, {
        deviceToken: action.deviceToken,
        authenticityToken: action.authenticityToken,
        loaded: true
      })
    case actionTypes.UPDATE_AUTH_TOKEN_IN_DB:
      console.log('TOKENS Reducer data UPDATE_AUTH_TOKEN_IN_DB', action)

      DB.updateAuthToken(action.authenticityToken)

      return Object.assign({}, state, {
        authenticityToken: action.authenticityToken,
        loaded: true
      })
    default:
      return state
  }
}

export default tokens
