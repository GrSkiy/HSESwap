import * as fetchTypes from '../constants/api'

export function fetchData(url, callback) {
  return {
    type: fetchTypes.FETCH_DATA_FROM_API,
    url: url,
    callback: callback
  }
}
export function linkFromTokens() {
  return {
    type: fetchTypes.LINK_FOR_FETCHING_TOKENS_FROM_API
    // deviceToken: data.device_token,
    // authenticityToken: data.authenticity_token
  }
}
export function linkFromExchangeMinors(device_token) {
  return {
    type: fetchTypes.LINK_FOR_FETCHING_EXCHANGE_MINORS_FROM_API,
    deviceToken: device_token
    // authenticityToken: data.authenticity_token
  }
}
export function linkFromUsersExchangeMinors() {
  return {
    type: fetchTypes.LINK_FOR_FETCHING_USERS_EXCHANGE_FROM_API
    // deviceToken: device_token
    // authenticityToken: data.authenticity_token
  }
}
export function linkFromAllMinors() {
  return {
    type: fetchTypes.LINK_FOR_FETCHING_ALL_MINORS_FROM_API
    // deviceToken: device_token
    // authenticityToken: data.authenticity_token
  }
}
export function linkFromUsersData() {
  return {
    type: fetchTypes.LINK_FOR_FETCHING_USERS_DATA_FROM_API
    // deviceToken: device_token
    // authenticityToken: data.authenticity_token
  }
}
// export function fetchChatRoomMinors() {
//   return {
//     type: linkFromTypes.LINK_FOR_FETCHING_CHAT_ROOM_FROM_API
//     // deviceToken: device_token
//     // authenticityToken: data.authenticity_token
//   }
// }
