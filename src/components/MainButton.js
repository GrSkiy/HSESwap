import React from 'react'
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native'

export default function MainButton({ onPress, className, title }) {
  return className === 'active' ? (
    <TouchableOpacity onPress={onPress} style={styles.activeMainButtonArea}>
      <Text style={styles.activeMainButtonText}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.inactiveMainButtonArea}>
      <Text style={styles.inactiveMainButtonText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  activeMainButtonArea: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 42,
    minWidth: 160,
    elevation: 8,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0488FF'
  },
  inactiveMainButtonArea: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 42,
    minWidth: 160,
    elevation: 8,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1'
  },
  activeMainButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  inactiveMainButtonText: {
    fontSize: 18,
    color: '#929292',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})
