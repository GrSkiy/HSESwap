import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'

export default function LinkButton({ handleClick, title }) {
  return (
    <TouchableOpacity onPress={handleClick} style={styles.linkButtonArea}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  )
}
