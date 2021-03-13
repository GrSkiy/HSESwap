import React from 'react'
import { StyleSheet, TextInput, Text, View, Picker } from 'react-native'

const renderPicker = (items, current, field, handleChange) => {
  let selectItems = []

  items.forEach((item, i) => {
    selectItems.push(
      <Picker.Item label={item.city_name} value={item.city_name} key={i} />
    )
  })

  return (
    <Picker
      style={styles.input}
      selectedValue={current}
      onValueChange={(itemValue, itemIndex) =>
        handleChange(itemIndex, itemValue, field)
      }
      // onChangeText={() => console.log(props)}
      // value={}
      // placeholder={placeholder}
      // placeholderTextColor="#979797"
    >
      {selectItems}
    </Picker>
  )
}

export default function Select({ label, items, current, field, handleChange }) {
  // <View style={styles.componentsWhisIcon}></View>
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{label}</Text>
      {renderPicker(items, current, field, handleChange)}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    color: '#000',
    width: '100%',
    paddingLeft: 20,
    height: 48,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,

    elevation: 11,
    borderRadius: 10
  },
  componentsWhisIcon: {
    flexDirection: 'row'
    //  width: 150,
  },

  searchIcon: {
    padding: 10
  },
  lable: {
    marginBottom: 12,
    color: '#005AAB',
    fontWeight: 'bold',
    fontSize: 12
  },
  container: {}
})
