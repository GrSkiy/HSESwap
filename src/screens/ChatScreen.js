import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchData } from '../store/actions/api'

import { ActionCable, Cable } from '@kesha-antonov/react-native-action-cable'

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

import styles from '../stylesheets/main'

import MainButton from '../components/MainButton'
import StatusCard from '../components/StatusCard'
import { MaterialIcons } from '@expo/vector-icons'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

const actionCable = ActionCable.createConsumer('ws://localhost:3000/cable')
const cable = new Cable({})

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities,
    url: state.url
  }
}

class ChatScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      message: ''
    }
  }

  componentDidMount() {
    const url = this.props.navigation.getParam('url')
    this.props.fetchData(url, this.changeState)
  }

  changeState = (data) => {
    this.setState({
      data: data,
      loading: false,
      profile_id: this.props.navigation.getParam('profile_id')
    })

    const channel = cable.setChannel(
      `room_channel_${this.state.data.data.id}`,
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

    await fetch(`http://127.0.0.1:3000/api/v1/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })

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

  getState = () => {
    return this.state
  }

  chanheUserStatus = async (i) => {
    const userStatus = this.props.navigation.getParam('user_status')
    const studentStatus = this.props.navigation.getParam('student_status')
    const userID = this.state.profile_id
    const responder_id = this.props.navigation.getParam('responder_id')
    const requester_id = this.props.navigation.getParam('requester_id')
    const newUserStatus = userStatus + i
    const userRole = userID == responder_id ? 'responder' : 'requester'
    const exchangeId = this.props.navigation.getParam('id')

    let newExchangeData = {
      action: 'update',
      id: exchangeId,
      role: userRole,
      newStatus: newUserStatus,
      studentStatus: studentStatus
    }

    await fetch(`http://127.0.0.1:3000/api/v1/exchange_requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newExchangeData)
    })
    console.log(newUserStatus, exchangeId)
  }

  render() {
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.screenWithButtonOnBottom}>
          <View style={styles.pinMinorWrapper}>
            <Text style={styles.pinMinorText}>
              {this.props.navigation.getParam('minorName')}
            </Text>
            <StatusCard
              user_status={this.props.navigation.getParam('user_status')}
              exchange_status={this.props.navigation.getParam(
                'exchange_status'
              )}
              handleStatusChange={this.chanheUserStatus}
            />
          </View>
          <View style={styles.chatWrapper}>
            <View style={styles.messagesList}>
              {this.renderMessages(this.state.data.messages)}
            </View>
            <View style={styles.newMessage}>
              <View style={styles.newMessage}>
                <TextInput
                  style={styles.input}
                  // onChangeText={(value) => setText(value)}
                  onChangeText={this.changeTetx}
                  value={this.state.message}
                  placeholder="Введите сообщение"
                  placeholderTextColor="#979797"
                />
                <TouchableOpacity
                  style={styles.bottom}
                  onPress={this.confirmation}
                >
                  <Text>Отправить</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

ChatScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('name'),
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(ChatScreen)
