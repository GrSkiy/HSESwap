import { DB } from './db'

import * as SQLite from 'expo-sqlite'

export function bootstrap() {
  try {
    DB.init()
    console.log('Database started...')

    const data = { deviseToken: 'testToken' }

    let full_tokens
    const getTokensFromDB = (tokens) => {
      // tokens.forEach((token, i) => {
      //   console.log(token)
      // })

      console.log(tokens)
    }

    DB.getTokens((result) => {
      getTokensFromDB(result)
    })

    // DB.createToken(data).then(() => {
    //   DB.getTokens((result) => {
    //     tokens = result
    //     console.log('Got tokens:', tokens)
    //   })
    // })
    // console.log(DB.getTokens())
  } catch (e) {
    console.log('Error: ', e)
  }
}
