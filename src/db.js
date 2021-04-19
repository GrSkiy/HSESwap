import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('phoneToken.db')

class DB {
  static init() {
    return new Promise((resolve, reject) => {
      console.log('DB Init')

      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tokens (id INTEGER PRIMARY KEY NOT NULL, device_token TEXT, authenticity_token TEXT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static getToken(callback) {
    return db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tokens', [], (trans, result) => {
        console.log(result)
        callback(result.rows[result.rows.length - 1])
      })
    })
  }

  static createToken(device_token, authenticity_token) {
    return new Promise((resolve, reject) => {
      console.log('DB Create Token')

      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO tokens (device_token, authenticity_token) VALUES (?, ?)`,
          ['', ''],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

  static updateToken(device_token, authenticity_token) {
    return new Promise((resolve, reject) => {
      console.log('DB Update Token', device_token, authenticity_token)

      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE tokens SET device_token = ?, authenticity_token = ? WHERE id = 1',
          [device_token, authenticity_token],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static updateAuthToken(authenticity_token) {
    return new Promise((resolve, reject) => {
      console.log('DB Update Auth Token', authenticity_token)

      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE tokens SET authenticity_token = ? WHERE id = 1',
          [authenticity_token],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static removeDB() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('DROP TABLE tokens', [], resolve, (_, error) =>
          reject(error)
        )
      })
    })
  }
}

export default DB
