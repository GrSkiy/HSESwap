import { GET_DEVICE_DATA } from '../types'

import { data } from '../../context/appContext'

export const initialState = {
  guest_token: null,
  loading: true
}

export const deviseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVICE_DATA:
      return {
        ...state,
        guest_token: action.payload,
        loading: false
      }
    default:
      return state
  }
}
//
