import { GET_TOKEN_FROM_DB, UPDATE_TOKEN_IN_DB } from '../constants/token'
import { AppContext } from '../../context/appContext'

const initialState = {
  devise_token: '',
  authenticity_token: ''
}

const token = (state = initialState, action) => {
  console.log('Reducer data', action, state)

  switch (action.type) {
    case GET_TOKEN_FROM_DB:
      return Object.assign({}, state, {
        devise_token: action.token.devise_token,
        authenticity_token: action.token.authenticity_token
      })
    case UPDATE_TOKEN_IN_DB:
      return Object.assign({}, state, {
        devise_token: action.token.devise_token,
        authenticity_token: action.token.authenticity_token
      })
    default:
      return state
  }
}

export default token
