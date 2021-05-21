import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Line() {
  return <View style={styles.line}></View>
}

const styles = StyleSheet.create({
  line: {
    // width: 'calc(100% + 40px)',
    width: '100%',
    marginLeft: -20,
    height: 1,
    backgroundColor: '#EAEAEA'
    // marginBottom: 13,
  }
})
