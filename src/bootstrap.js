import * as SQLite from 'expo-sqlite'
import DB from './db'

export function bootstrap() {
  try {
    // DB.removeDB()

    DB.init()
    console.log('Database started...')

    DB.getToken((result) => {
      console.log('Bootstrap getTokensFromDB', result)

      if (result === undefined) {
        DB.createToken().then(() => {
          console.log('Bootstrap DB.createToken')
        })
      }
    })
  } catch (e) {
    console.log('Error: ', e)
  }
}
