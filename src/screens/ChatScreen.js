import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  Alert,
  TextInput
} from 'react-native'

import { ActionCable, Cable } from '@kesha-antonov/react-native-action-cable'

import MainButton from '../components/MainButton'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

const actionCable = ActionCable.createConsumer('ws://localhost:3000/cable')
const cable = new Cable({})

let EXSHANGE = 'name'

class ChatScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      message: ''
    }
  }

  async componentDidMount() {
    const url = this.props.navigation.getParam('url')
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      data: data,
      loading: false,
      profile_id: this.props.navigation.getParam('profile_id')
    })
    EXSHANGE = this.state
    // console.log(EXSHANGE);
    const channel = cable.setChannel(
      `room_channel_${this.state.data.data.id}`, // channel name to which we will pass data from Rails app with `stream_from`
      actionCable.subscriptions.create({
        channel: 'RoomChannel',
        room_id: this.state.data.data.id
      })
    )
    channel.on('received', this.sentMessage)
  }

  sentMessage = (data) => {
    console.log(this.state)
    console.log(data.message.content)

    let state = this.state
    const newMessage = {
      content: data.message.content
    }
    state.data.messages.push(data.message)

    this.setState(state)
    console.log(this.state)
  }

  changeTetx = (text) => {
    let data = this.state
    data.message = text
    this.setState(data)
  }

  confirmation = async (content) => {
    let message = {
      profile_id: this.state.profile_id,
      exchange_request_id: this.state.data.data.id,
      content: this.state.message
    }

    // cable
    //   .channel(`room_channel_${this.state.data.data.id}`)
    //   .perform("send_message", { text: "Hey" });

    await fetch(`http://127.0.0.1:3000/api/v1/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })

    // await fetch(`ws://localhost:3000/cable`, {
    //   command: "message",
    //   identifier: { channel: "RoomChannel" },
    //   data: { action: "some_method", args: "11111" },
    // });

    console.log(message)
    this.setState({ message: '' })
  }

  renderMessages = (messages) => {
    let messages_items = []

    messages.forEach((message, i) => {
      messages_items.push(
        <View key={i}>
          <Text>{message.content}</Text>
        </View>
      )
    })

    return messages_items
  }

  render() {
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <SafeAreaView>
        {this.renderMessages(this.state.data.messages)}
        <View style={styles.newMessage}>
          <TouchableOpacity style={styles.bottom} onPress={this.confirmation}>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={(value) => setText(value)}
                onChangeText={this.changeTetx}
                value={this.state.message}
                placeholder="Введите сообщение"
                placeholderTextColor="#979797"
              />
              <Text>Отправить</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  // render() {
  //   return (
  //     <SafeAreaView>
  //       <TextInput />
  //     </SafeAreaView>
  //   )
  // }
}

ChatScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'EXSHANGE'
})

export default ChatScreen

const styles = StyleSheet.create({
  input: {
    color: '#000',
    width: '90%',
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    fontSize: 16,
    marginBottom: 12,
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
  newMessage: {
    flexDirection: 'row'
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 48,
    marginLeft: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#0488FF',
    borderRadius: 20
  }
})
