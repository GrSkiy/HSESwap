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
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, auth INTEGER, profileId INTEGER, email TEXT, city TEXT, exchangeMinorId INTEGER, year INTEGER, minor TEXT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS whishedMinors (id INTEGER PRIMARY KEY NOT NULL, name TEXT)',
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
        callback(result.rows.item(0))
      })
    })
  }

  static createToken(authenticity_token, device_token) {
    return new Promise((resolve, reject) => {
      console.log('DB Create Token', authenticity_token, device_token)

      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO tokens (authenticity_token, device_token) VALUES (?, ?)`,
          [authenticity_token, device_token],
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

  static createUser(auth, data) {
    return new Promise((resolve, reject) => {
      console.log('DB Create User', data)

      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO user (auth, profileId, email, city, year, minor, exchangeMinorId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            auth,
            data.id,
            data.email,
            data.city,
            data.year,
            data.minor,
            data.exchangeMinorId
          ],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }
  static createWhishedMinors(name) {
    return new Promise((resolve, reject) => {
      console.log('DB Create WM', name)

      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO user (name) VALUES (?)`,
          [name],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

  static getUserInfo(callback) {
    return new Promise((resolve, reject) => {
      console.log('DB Get User Info')

      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM user', [], (trans, result) => {
          callback(result.rows.item(0))
        })
      })
    })
  }

  static updateUser(newStatus) {
    return new Promise((resolve, reject) => {
      console.log('##############')
      console.log('DB Update User', newStatus)

      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE user SET auth = ? WHERE id = 1',
          [newStatus],
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
