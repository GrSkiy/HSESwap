import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('phoneToken.db')

class DB {
  static init() {
    return new Promise((resolve, reject) => {
      console.log('DB Init')

      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tokens (id INTEGER PRIMARY KEY NOT NULL, devise_token TEXT, authenticity_token TEXT)',
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
        console.log('DB Get Tokens', result)
        callback(result.rows[result.rows.length - 1])
      })
    })
  }

  static createToken() {
    return new Promise((resolve, reject) => {
      console.log('DB Create Token')

      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO tokens (devise_token, authenticity_token) VALUES (?, ?)`,
          ['', ''],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

  // static updateToken(devise_token, authenticity_token) {
  //   return new Promise((resolve, reject) => {
  //     console.log('DB Create Token', devise_token, authenticity_token)
  //
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         `INSERT INTO tokens (devise_token) VALUES (?)`,
  //         [devise_token],
  //         (_, result) => resolve(result.insertId),
  //         (_, error) => reject(error)
  //       )
  //     })
  //   })
  // }

  // static getTokens() {
  //   return new Promise((resolve, reject) => {
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         'SELECT * FROM tokens',
  //         [],
  //         (_, result) => {
  //           return resolve(result.rows._array)
  //         },
  //         (_, error) => reject(error)
  //       )
  //     })
  //   })
  // }
  // static getTokens() {
  //   return db.transaction((tx) => {
  //     tx.executeSql('SELECT * FROM tokens', [], (trans, result) => {
  //       console.log(result)
  //     })
  //   })
  // }

  // static countOfElements() {
  //   return new Promise((resolve, reject) => {
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         'COUNT(*)',
  //         [],
  //         (_, result) => resolve(result.rows._array),
  //         (_, error) => reject(error)
  //       )
  //     })
  //   })
  // }

  // static createToken({ deviseToken }) {
  //   return
  //   {
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         `INSERT INTO tokens (devise_token) VALUES (?)`,
  //         [deviseToken],
  //         (_, result) => console.log(result.insertId),
  //         (_, error) => reject(error)
  //       )
  //     })
  //   }
  // }

  static fillinDeviseToken(token) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE tokens SET devise_token = ? WHERE id = 1',
          [token],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  // static updateToken(token, authenticity_token) {
  //   return new Promise((resolve, reject) => {
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         'UPDATE posts SET authenticity_token = ? WHERE id = ?',
  //         [authenticity_token, token.id],
  //         resolve,
  //         (_, error) => reject(error)
  //       )
  //     })
  //   })
  // }

  static removeDB() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('DROP TABLE tokens', [], resolve, (_, error) =>
          reject(error)
        )
        // tx.executeSql(
        // 'DELETE FROM posts WHERE id = ?',
        // [id],
        // resolve,
        // (_, error) => reject(error)
        // )
      })
    })
  }
}

export default DB
