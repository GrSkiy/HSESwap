import * as actionTypes from '../constants/api'

const host_root = 'http://192.168.1.67:3000/api/'
// const host_root = 'http://192.168.0.107:3000/api/'
// const host_root = 'http://192.168.43.146:3000/api/'
// const host_root = 'http://95.165.28.240:3000/api/'
const api_version = 'v1/'
const authenticity_token = '?authenticity_token='
const device_token = '&device_token='

// 1. Route to auth
//    - With device token
//    - Without token
//
// Можем при аутентификации передавать Exchange Minors
//    - Ссылка на Exchange Minors не нужна
//    - Нужно добавлять внутрь каждого Exchange Minor ссылку
//      по которой можно отправить запрос на Exchange Request
//    - Информацию о состоянии чата (о новых сообщениях)
//    - Информацию о состоянии экрана «Для тебя» (выдавать пустой
//      массив Exchange Minors, если не заполнен Exchange Minor)
//    - Роуты к элементам меню в бургере
//      * Ссылка на апдейт
//      * Ссылка на страницу всех майноров

// 2. Route to Minor List

const login_guest_url_v1 = 'login/guest'
const exchange_minors_index_url_v1 = 'exchange_minors'
const exchange_requests_index_url_v1 = 'exchange_requests'
const minors_index_url_v1 = 'minors'
const user_url_v1 = 'profiles'
const guest = 'guests'
const log_out = 'users/sign_out'
const messages = 'messages'
const cities = 'cities'

const post_login = 'login'
const login = 'users/sign_in'
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
      newState = Object.assign({}, state)
      newState.pageData = action.data
      return newState

    case actionTypes.LOG_IN:
      newState = Object.assign({}, state)
      newState.pageData = data
      return newState

    case actionTypes.LOG_OUT:
      newState = Object.assign({}, state)
      newState.pageData = data
      return newState

    // return newState
    case actionTypes.CHANGE_PROFILE:
      console.log('CHANGE PROFILE')
    // fetch(
    //   root +
    //     user_url_v1 +
    //     authenticity_token +
    //     action.authenticityToken +
    //     device_token +
    //     action.deviceToken,
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(action.data)
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Response from the server', data)
    //     newState = Object.assign({}, state)
    //     newState.pageData = data
    //     action.callback(newState.pageData)
    //   })

    case actionTypes.LINK_FOR_GUEST_FROM_API:
      newState = Object.assign({}, state)
      newState.url = root + guest
      return newState
    case actionTypes.LINK_FOR_FETCHING_TOKENS_FROM_API:
      newState = Object.assign({}, state)
      newState.url = root + login_guest_url_v1
      return newState
    case actionTypes.LINK_FOR_FETCHING_EXCHANGE_MINORS_FROM_API:
      newState = Object.assign({}, state)
      if (action.deviceToken) {
        newState.url =
          root +
          exchange_minors_index_url_v1 +
          authenticity_token +
          action.deviceToken
      } else {
        newState.url = root + exchange_minors_index_url_v1
      }
      console.log('asdmlasdlkamsdlamsdlkams')

      console.log(newState.url)
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
      console.log(action)
      newState.url =
        root +
        user_url_v1 +
        authenticity_token +
        action.authenticityToken +
        device_token +
        action.deviceToken
      return newState
    case actionTypes.LINK_FOR_FETCHING_MAIN_SCREEN_DATA_FROM_API:
      newState = Object.assign({}, state)
      newState.url =
        root +
        exchange_minors_index_url_v1 +
        authenticity_token +
        action.deviceToken
      return newState

    case actionTypes.LINK_FOR_LOG_IN_FROM_API:
      newState = Object.assign({}, state)
      newState.url = root + post_login
      console.log('LINK')
      console.log(newState)
      return newState
    case actionTypes.LINK_FOR_LOG_OUT:
      newState = Object.assign({}, state)
      newState.url = root + log_out
      console.log(newState)
      return newState
    case actionTypes.LINK_TO_LOG_IN:
      newState = Object.assign({}, state)
      newState.url = root + login
      console.log(newState)
      return newState
    case actionTypes.LINK_TO_NEW_MESSAGE:
      newState = Object.assign({}, state)
      newState.url = root + messages
      console.log(newState)
      return newState
    case actionTypes.LINK_FOR_CHANGE_PROFILE_DATA:
      newState = Object.assign({}, state)
      newState.url =
        root +
        user_url_v1 +
        '?authenticity_token=' +
        action.tokens.authenticity_token +
        '&device_token=' +
        action.tokens.device_token
      console.log(newState)
      return newState
    case actionTypes.LINK_FOR_GET_CITY_DATA:
      newState = Object.assign({}, state)
      newState.url = root + cities
      console.log(newState)
      return newState

    default:
      return state
  }
}

export default data_from_api
