import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Picker } from 'react-native'

export default class SelectToggleButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      text,
      handleClick,
      selectType,
      currentYear,
      classArray,
      classNumber
    } = this.props

    console.log(classArray.length)
    console.log(classNumber === classArray.length - 1)

    let borderRadiusStyles = {}

    if (classNumber == classArray.length - 1) {
      borderRadiusStyles = {
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13
      }
    } else if (classNumber == 0) {
      borderRadiusStyles = {
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13
      }
    } else {
      borderRadiusStyles = {}
    }

    let defaultStyles = {
      width: 250,
      backgroundColor: 'rgba(242, 242, 242, 1)',
      height: 48,
      justifyContent: 'center',
      alignitems: 'center',
      paddingTop: 13,
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 13
    }

    let mergeClass = { ...borderRadiusStyles, ...defaultStyles }

    return (
      <TouchableOpacity
        zIndex={100}
        onPress={() => handleClick(selectType, currentYear)}
        style={mergeClass}
      >
        <Text style={{ width: 226, textAlign: 'center', fontSize: 15 }}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}
