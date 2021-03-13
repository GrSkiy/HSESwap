import * as FileSystem from 'expo-file-system'
import { GET_DEVICE_DATA } from './types'
import { DB } from '../db'

// import { data } from '../context/appContext'

export const getTokens = () => {
  console.log('00000000000000000000000000')
  return (dispatch) => {
    const tokens = DB.getTokens()
    dispatch({
      type: GET_DEVICE_DATA,
      payload: tokens
    })
  }
}
