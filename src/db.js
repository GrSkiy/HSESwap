import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('phoneToken.db')

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tokens (id INTEGER PRIMARY KEY NOT NULL, devise_token TEXT NOT NULL, authenticity_token TEXT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static createToken({ deviseToken }) {
    return new Promise((resolve, reject) => {
      console.log(deviseToken)
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO tokens (devise_token) VALUES (?)`,
          [deviseToken],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

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

  static getTokens(cb) {
    return db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tokens', [], (trans, result) => {
        cb(result.rows._array)
      })
    })
  }

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

  static removeDB(id) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM posts WHERE id = ?',
          [id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
}
