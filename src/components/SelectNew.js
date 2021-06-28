import React from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Picker,
  TouchableOpacity
} from 'react-native'
import SelectToggleButton from './SelectToggleButton'

import InputTriangle from '../../assets/svg/inputTriangle.svg'

export default class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      styles: {}
    }
  }

  renderOptions = () => {
    let { options, handleSelect, selectType } = this.props

    let optionsItems = []

    console.log(options)

    options.forEach((option, i) => {
      optionsItems.push(
        <SelectToggleButton
          classArray={options}
          classNumber={i}
          text={option}
          selectType={selectType}
          currentYear={i}
          handleClick={handleSelect}
          key={i}
        />
      )
    })

    return optionsItems
  }

  render() {
    const {
      current,
      options,
      currentSelectType,
      handleSelect,
      selectType,
      handleOpenSelect,
      title,
      className
    } = this.props

    let selectClass = {}
    let dropStyles = {}

    if (className == 'small') {
      selectClass = {
        width: 100
      }
    } else if (className == 'medium') {
      selectClass = {
        width: 220
      }

      dropStyles = {
        right: 0
      }
    } else if (className == 'large') {
      selectClass = {
        width: '100%'
      }
    }

    let defaultStyles = {
      borderRadius: 15,
      flexDirection: 'row',
      alignitems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 9,
      paddingBottom: 14,
      backgroundColor: '#efefef'
    }

    let defaultDropDownStyles = {
      position: 'absolute',
      top: 70,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: 0.15,
      shadowRadius: 48,
      elevation: 5
    }

    mergeStyle = { ...selectClass, ...defaultStyles }

    mergeDropDownStyles = { ...defaultDropDownStyles, ...dropStyles }

    return (
      <View zIndex={4} style={{}}>
        <TouchableOpacity
          style={mergeStyle}
          onPress={() => handleOpenSelect(selectType)}
        >
          <View style={{}}>
            <Text style={{ fontSize: 12, fontWeight: '600', height: 22 }}>
              {title}
            </Text>
            <Text style={{ fontSize: 14, marginTop: 3 }}>{current}</Text>
          </View>
          <View style={{ paddingTop: 13 }}>
            <InputTriangle style={{ width: 18, height: 18 }} />
          </View>
        </TouchableOpacity>
        <View style={mergeDropDownStyles}>
          {currentSelectType == selectType ? (
            this.renderOptions()
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
    )
  }
}
