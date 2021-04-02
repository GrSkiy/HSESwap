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

export default class Burger extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Modal visible={false}>
        <Text>Burger</Text>
      </Modal>
    )
  }
}
