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

  render() {
    console.log('=================')
    console.log('Burger')
    console.log(this.props)
    console.log('=================')
    let { show } = this.state

    return (
      <Modal
        styleanimationType={'fade'}
        visible={show}
        onRequestClose={this.close}
      >
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={this.close} style={styles.modal}>
            <Text>Burger</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    height: 300
  }
})
