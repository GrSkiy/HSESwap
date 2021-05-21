import React from 'react'
import { StyleSheet, TextInput, Text, View, Picker } from 'react-native'

const renderPicker = (items, current, field, handleChange) => {
  let selectItems = []

  items.forEach((item, i) => {
    selectItems.push(
      // <Picker.Item label={item.name} value={item.value} key={i} />
      <Picker.Item label={item.name.toString()} value={item.value} key={i} />
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

export default function Select({
  label,
  items,
  current,
  field,
  handleChange,
  character
}) {
  // <View style={styles.componentsWhisIcon}></View>
  return (
    <View style={styles[character]}>
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>{label}</Text>
        {renderPicker(items, current, field, handleChange)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingTop: 7,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 15
  },
  one: {
    width: '30%'
  },
  two: {
    width: '66%'
  },
  three: {
    width: '100%'
  },

  lable: {
    marginBottom: 8,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12
  },
  input: {
    backgroundColor: '#F1F1F1',
    borderWidth: 0,
    color: '#C4C4C4',
    width: '100%',
    fontSize: 14
  },
  componentsWhisIcon: {
    flexDirection: 'row'
    //  width: 150,
  }
})
