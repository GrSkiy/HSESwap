import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.className == 'reg') {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.text}>
            Войди, чтобы иметь возможность обмениваться
          </Text>
          <TouchableOpacity style={styles.but} onPress={this.props.handleClick}>
            <Text style={styles.butText}>Войти</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.text}>
            Открой свое объявление, чтобы другие студенты могли обмениваться с
            тобой!
          </Text>
          <TouchableOpacity style={styles.but} onPress={this.props.handleClick}>
            <Text style={styles.butText}>Открыть</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 14,
    paddingTop: 13,
    paddingBottom: 13,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: '#fFF',
    alignItems: ' center',

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    shadowColor: '#0488FF',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 5
  },
  text: {
    color: '#000',
    fontSize: 14,
    marginRight: 11,
    fontWeight: ' 700',
    lineHeight: 20
  },
  therSpan: {
    fontSize: 10,
    color: '#000'
  },
  but: {
    paddingLeft: 10,
    height: 40,
    paddingRight: 13,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#0488FF',
    justifyContent: ' center',
    alignItems: 'center',
    borderRadius: 10
  },
  butText: {
    color: '#fff',
    fontWeight: ' 700',
    fontSize: 16
  }
})
