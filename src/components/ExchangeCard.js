import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class ExchangeCardCurrent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { minorName, result, time, handleClick } = this.props

    return (
      <TouchableOpacity style={styles.cardContainer} onPress={handleClick}>
        <View style={styles.main}>
          <Text style={styles.title}>{minorName}</Text>
          <Text style={styles.text}>{result}</Text>
        </View>
        <Text style={styles.span}>{time}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 11,
    paddingLeft: 18,
    paddingBottom: 11,
    paddingRight: 12,
    borderRadius: 15,
    backgroundColor: '#F1F1F1',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  main: {
    width: '76%'
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10
  },
  span: {
    fontSize: 12,
    color: '#979797',
    marginBottom: 30
  },
  text: {
    fontSize: 16,
    color: '#0086FF'
  }
})
