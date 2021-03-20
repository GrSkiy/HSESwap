import * as actionTypes from '../constants/api'

const host_root = 'http://127.0.0.1:3000/api/'
const api_version = 'v1/'
const devise_token = '?device_token='

const login_guest_url_v1 = 'login/guest'
const exchange_minors_index_url_v1 = 'exchange_minors'
const exchange_requests_index_url_v1 = 'exchange_requests'
const minors_index_url_v1 = 'minors'
const user_url_v1 = 'profiles'
// const chat_room_url_v1 = 'messages'

const initialState = {
  url: '',
  pageData: {}
}

const root = host_root + api_version
let newState = Object.assign({}, initialState)

const data_from_api = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_FROM_API:
      fetch(action.url)
        .then((response) => response.json())
        .then((data) => {
          console.log('Response from the server', data)
          newState = Object.assign({}, state)
          newState.pageData = data
          action.callback(newState.pageData)
        })

    case actionTypes.LINK_FOR_FETCHING_TOKENS_FROM_API:
      newState = Object.assign({}, state)
      newState.url = root + login_guest_url_v1
      return newState
    case actionTypes.LINK_FOR_FETCHING_EXCHANGE_MINORS_FROM_API:
      newState = Object.assign({}, state)
      newState.url =
        root + exchange_minors_index_url_v1 + devise_token + action.deviceToken
      return newState
    case actionTypes.LINK_FOR_FETCHING_USERS_EXCHANGE_FROM_API:
      newState = Object.assign({}, state)
      newState.url = root + exchange_requests_index_url_v1
      return newState
    // case actionTypes.LINK_FOR_FETCHING_CHAT_ROOM_FROM_API:
    //   return root + exchange_requests_index_url_v1
    case actionTypes.LINK_FOR_FETCHING_ALL_MINORS_FROM_API:
      newState = Object.assign({}, state)
      newState.url = root + minors_index_url_v1
      return newState
    case actionTypes.LINK_FOR_FETCHING_USERS_DATA_FROM_API:
      newState = Object.assign({}, state)
      newState.url = root + user_url_v1
      return newState

    default:
      return state
  }
}

export default data_from_api
