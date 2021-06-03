import * as actionTypes from '../constants/user'

import DB from '../../db'

const initialState = {
  auth: false
}

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_INFO:
      console.log('GET USER INFO Reducer data GET_USER_INFO', action)
      if (action.auth) {
        return Object.assign({}, state, {
          auth: action.auth
        })
      } else {
        return state
      }
    case actionTypes.UPDATE_USER_INFO:
      console.log('UPDATE USER INFO Reducer data GET_USER_INFO', action)

      if (action.auth == 1) {
        return Object.assign({}, state, {
          auth: true,
          email: action.data.email,
          minor: action.data.minor
        })
      } else {
        return Object.assign({}, state, { auth: false })
      }
      return state
    default:
      return state
  }
}

export default userInfo
