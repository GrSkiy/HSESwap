import * as FileSystem from 'expo-file-system'
import { GET_DEVICE_DATA } from '../types'
import { DB } from '../../db'

// import { data } from '../context/appContext'

export const getTokens = () => {
  return function (dispatch) {
    const tokens = DB.getTokens()
    console.log(tokens)
    dispatch({
      type: GET_DEVICE_DATA,
      payload: tokens
    })
  }
}
