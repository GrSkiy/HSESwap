import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'

export default class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.className == 'my') {
      return (
        <View style={styles.my}>
          <Text style={styles.myText}>{this.props.content}</Text>
          <Text style={styles.mySpan}>{this.props.time.slice(11, 16)}</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.ther}>
          <Text style={styles.therText}>{this.props.content}</Text>
          <Text style={styles.therSpan}>{this.props.time.slice(11, 16)}</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  my: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    backgroundColor: '#0488FF',
    maxWidth: 197,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  myText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5
  },
  ther: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    backgroundColor: '#F1F1F1',
    maxWidth: 197,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  therText: {
    color: '#000',
    fontSize: 16,
    marginRight: 5
  },
  mySpan: {
    fontSize: 10,
    color: '#fff'
  },
  therSpan: {
    fontSize: 10,
    color: '#000'
  }
})
