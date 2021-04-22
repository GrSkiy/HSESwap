import * as actionTypes from '../constants/user'

export function getUserInfo(data) {
  return {
    type: actionTypes.GET_USER_INFO,
    auth: data.auth
  }
}

export function updateUserInfo(data) {
  return {
    type: actionTypes.UPDATE_USER_INFO,
    auth: data.auth
  }
}
