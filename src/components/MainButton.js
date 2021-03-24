import React from 'react'
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native'

export default function MainButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainButtonArea}>
      <Text style={styles.mainButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainButtonArea: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 42,
    minWidth: 160,
    elevation: 8,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#0488FF',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})
