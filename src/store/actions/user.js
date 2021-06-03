import * as actionTypes from '../constants/user'

export function getUserInfo(token) {
  return {
    type: actionTypes.GET_USER_INFO,
    token: token
  }
}

export function updateUserInfo(data, auth) {
  return {
    type: actionTypes.UPDATE_USER_INFO,
    data: data,
    auth: auth
  }
}
