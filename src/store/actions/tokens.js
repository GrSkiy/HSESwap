import * as actionTypes from '../constants/tokens'

export function getToken(data) {
  return {
    type: actionTypes.GET_TOKEN_FROM_DB,
    deviceToken: data.device_token,
    authenticityToken: data.authenticity_token
  }
}

export function updateToken(data) {
  return {
    type: actionTypes.UPDATE_TOKEN_IN_DB,
    deviceToken: data.device_token,
    authenticityToken: data.authenticity_token
  }
}

export function updateAuthToken(data) {
  return {
    type: actionTypes.UPDATE_AUTH_TOKEN_IN_DB,
    authenticityToken: data.authenticity_token
  }
}
