import React from 'react'
import { StyleSheet, TextInput, Text, View, Pressable } from 'react-native'

export default function LargeInput({
  marginBottom,
  lableText,
  placeholder,
  setText,
  style,
  field,
  placeholderColor
}) {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.lable}>{lableText}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setText(value)}
        // value={}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        keyboardType="default"
      />
    </View>
  )
}
// placeholderTextColor="#979797"
const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    paddingLeft: 14,
    paddingRight: 20,
    paddingTop: 9,
    height: 62,

    // fontSize: 16,
    backgroundColor: '#F1F1F1',

    // elevation: 11,
    borderRadius: 15
  },

  input: {
    marginBottom: 14
  },

  lable: {
    marginBottom: 8,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12
  }
})
