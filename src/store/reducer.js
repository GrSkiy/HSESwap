import { GET_DEVICE_DATA } from './types'

export const initialState = {
  guest_token: null,
  loading: true
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVICE_DATA:
      console.log('GET_DEVICE_DATA')
      return {
        ...state,
        guest_token: action.payload,
        loading: false
      }
    default:
      return state
  }
}
