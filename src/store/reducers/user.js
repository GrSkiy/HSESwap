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
      console.log('UPDATE USER INFO Reducer data UPD_USER_INFO', action)

      if (action.auth) {
        return Object.assign({}, state, { ...action.data, auth: action.auth })
      } else {
        return Object.assign({}, state, { auth: false })
      }
      return state
    case actionTypes.REG_INFO:
      console.log('UPDATE USER INFO Reducer data REG_INFO', action)
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}

export default userInfo
