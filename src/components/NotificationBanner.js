import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class NotificationBanner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { text } = this.props

    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18
  },
  therSpan: {
    fontSize: 10,
    color: '#000'
  },
  but: {
    paddingLeft: 10,
    height: 40,
    paddingRight: 13,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#0488FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  butText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16
  }
})
