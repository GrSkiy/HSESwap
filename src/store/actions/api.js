import * as fetchTypes from '../constants/api'
import DB from '../../db'

function saveLogInDataToStore(data) {
  return {
    type: fetchTypes.LOG_IN,
    email: email
  }
}

function fetchLogInData(url, email) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Response from the server', data)
      return data
    })
}

export function login(url, email) {
  return function (dispatch) {
    return fetchLogInData(url, email).then((data) =>
      dispatch(saveFetchDataToStore(data))
    )
  }
}

export function logOut(url, tokens) {
  return function (dispatch) {
    return logOutFetch(url, tokens)
  }
}

export function logOutFetch(url, tokens) {
  fetch(url + '?authenticity_token=' + tokens.authenticityToken, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ deviceToken: tokens.deviceToken })
  }).then(() => DB.removeDB().then(() => DB.init()))
}

export function linkForGuest() {
  return {
    type: fetchTypes.LINK_FOR_GUEST_FROM_API
    // deviceToken: data.device_token,
    // authenticityToken: data.authenticity_token
  }
}

export function linkForChengeProfileData(tokens) {
  return {
    type: fetchTypes.LINK_FOR_CHANGE_PROFILE_DATA,
    tokens: tokens
    // authenticityToken: data.authenticity_token
  }
}

export function linkForLogOut() {
  return {
    type: fetchTypes.LINK_FOR_LOG_OUT
    // deviceToken: data.device_token,
    // authenticityToken: data.authenticity_token
  }
}

export function changeProfile(data) {
  return {
    type: fetchTypes.CHANGE_PROFILE,
    data: data
    // authenticityToken: data.authenticity_token
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
export function linkForMainScreen() {
  return {
    type: fetchTypes.LINK_FOR_FETCHING_MAIN_SCREEN_DATA_FROM_API
    // deviceToken: device_token
    // authenticityToken: data.authenticity_token
  }
}
export function linkFromUsersData(authenticityToken, deviceToken) {
  return {
    type: fetchTypes.LINK_FOR_FETCHING_USERS_DATA_FROM_API,
    authenticityToken: authenticityToken,
    deviceToken: deviceToken
  }
}
export function linkFromLogIn() {
  return {
    type: fetchTypes.LINK_FOR_LOG_IN_FROM_API
  }
}
export function linkForLogIn() {
  return {
    type: fetchTypes.LINK_FOR_LOG_IN_FROM_API
  }
}
export function linktoLogIn() {
  return {
    type: fetchTypes.LINK_TO_LOG_IN
  }
}
export function linkToNewMessage() {
  return {
    type: fetchTypes.LINK_TO_NEW_MESSAGE
  }
}

export function sendMessage(message, url) {
  return function (dispatch) {
    return fetchNewMessage(message, url)
  }
}

function fetchNewMessage(message, url) {
  console.log(message)
  console.log(url)
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  }).then((data) => console.log(data))
}
// export function fetchChatRoomMinors() {
//   return {
//     type: linkFromTypes.LINK_FOR_FETCHING_CHAT_ROOM_FROM_API
//     // deviceToken: device_token
//     // authenticityToken: data.authenticity_token
//   }
// }

export function fetchData(url) {
  console.log('//////////////////')
  return function (dispatch) {
    return fetchNewData(url).then((data) =>
      dispatch(saveFetchDataToStore(data))
    )
  }
}

function fetchNewData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('FETCH_DATA_FROM_API Response from the server', data)
      return data
    })
}

function saveFetchDataToStore(data) {
  return {
    type: fetchTypes.FETCH_DATA_FROM_API,
    data: data
  }
}
