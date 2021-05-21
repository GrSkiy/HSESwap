import React from 'react'

import {
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'

import styles from '../stylesheets/main'

import SettingPoint from '../components/SettingPoint'
// import MainButton from '../components/MainButton'
import Line from '../components/Line'

export default class Burger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  show = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }
  changePage = (root) => {
    this.close()
    return this.props.navigation.push(root)
  }

  // logOut = () => {
  //   "/api/v1/users/sign_out"
  // }

  render() {
    const { user } = this.props
    let { show } = this.state

    return (
      <Modal
        styleanimationType={'fade'}
        visible={show}
        onRequestClose={this.close}
      >
        <View>
          <TouchableOpacity onPress={() => this.close()}>
            <Text style={styles.logOutTitle}>close</Text>
          </TouchableOpacity>
          <View>
            <Text>{user.email}</Text>
            <Text>{user.minor}</Text>
            <SettingPoint
              title={'Открыть мое объявление'}
              // toggle={data.isPublished}
            />
          </View>
          <View style={styles.settingBody}>
            <View style={styles.pointsCollection}>
              <SettingPoint
                title={'Мои данные'}
                changePage={() => this.changePage('Settings')}
              />
              <SettingPoint
                title={'Список всех майноров'}
                changePage={() => this.changePage('AllMinors')}
              />
              <TouchableOpacity onPress={() => this.close()}>
                <Text style={styles.logOutTitle}>Выйти</Text>
              </TouchableOpacity>
              <Line />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
