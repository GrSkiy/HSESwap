import * as actionTypes from '../constants/token'

export function getToken(token) {
  return {
    type: actionTypes.GET_TOKEN_FROM_DB,
    token
  }
}

export function updateToken(token) {
  return {
    type: actionTypes.UPDATE_TOKEN_IN_DB,
    token
  }
}

// const createToken = (devise_token, authenticity_token) => {
//   console.log('Redux Action createToken', devise_token, authenticity_token)
//
//   return function (dispatch) {
//     // const tokens = DB.createToken()
//     // console.log('Redux Action createToken', tokens)
//
//     dispatch({
//       type: CREATE_TOKEN_IN_DB,
//       devise_token: devise_token,
//       authenticity_token: authenticity_token
//     })
//   }
// }
