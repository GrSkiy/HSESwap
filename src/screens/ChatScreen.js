import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchData, sendMessage, linkToNewMessage } from '../store/actions/api'

import { ActionCable, Cable } from '@kesha-antonov/react-native-action-cable'

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native'

import styles from '../stylesheets/main'

import Line from '../components/Line'
import Message from '../components/Message'
import StatusCard from '../components/StatusCard'
import { MaterialIcons } from '@expo/vector-icons'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

const actionCable = ActionCable.createConsumer('ws://localhost:3000/cable')
const cable = new Cable({})

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api,
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
    this.props.fetchData(url).then(this.addChannel)
    this.props.linkToNewMessage()
  }

  componentDidUpdate() {
    const { url } = this.props.data_from_api
    console.log('urlurlurlurlurlurl')
    if (url.search('messages') != -1) {
      let newState = this.state
      newState.newMessageUrl = url
      console.log(newState)
      // this.setState(newState)
    }
  }

  addChannel = () => {
    this.setState({
      data: this.props.data_from_api.pageData.data,
      loading: false,
      profile_id: this.props.navigation.getParam('profile_id')
    })
    const channel = cable.setChannel(
      `room_channel_${this.state.data.id}`,
      actionCable.subscriptions.create({
        channel: 'RoomChannel',
        room_id: this.state.data.id
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

  //new_message

  confirmation = (content) => {
    let message = {
      profile_id: this.state.profile_id,
      exchange_request_id: this.state.data.id,
      content: this.state.message
    }
    // .then(() => console.log(this.props))

    this.setState({ message: '' })
  }

  renderMessages = () => {
    const { messages } = this.props.data_from_api.pageData
    let messages_items = []

    messages.forEach((message, i) => {
      if (message.profile_id == this.state.profile_id) {
        messages_items.push(
          <Message
            content={message.content}
            className="my"
            time={message.created_at}
            key={i}
          />
        )
      } else {
        messages_items.push(
          <Message
            content={message.content}
            className="their"
            time={message.created_at}
            key={i}
          />
        )
      }
    })

    return messages_items
  }

  approvedRequest = (approved) => {
    console.log('APPROVED', approved)
    // const exchangeId = this.props.navigation.getParam('id')
    //
    // let data = {
    //   process: 'approved',
    //   id: exchangeId,
    //   approved: approved
    // }
    //
    // console.log(data)
    // await fetch(`http://127.0.0.1:3000/api/v1/exchange_requests`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
  }

  changeUserStatus = (i) => {
    console.log('NEW STATUS')
    // const userStatus = this.props.navigation.getParam('user_status')
    // const studentStatus = this.props.navigation.getParam('student_status')
    // const userID = this.state.profile_id
    // const responder_id = this.props.navigation.getParam('responder_id')
    // const requester_id = this.props.navigation.getParam('requester_id')
    // const newUserStatus = userStatus + i
    // const exchangeId = this.props.navigation.getParam('id')
    //
    // let newExchangeData = {
    //   process: 'changeUSerStatus',
    //   id: exchangeId,
    //   userID: userID,
    //   newStatus: newUserStatus,
    //   studentStatus: studentStatus
    // }
    //
    // await fetch(`http://127.0.0.1:3000/api/v1/exchange_requests`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newExchangeData)
    // })
  }

  render() {
    console.log(this.state)
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
              student_status={this.props.navigation.getParam('student_status')}
              exchange_status={this.props.navigation.getParam(
                'exchange_status'
              )}
              handleStatusChange={this.changeUserStatus}
              handleApprovedRequest={this.approvedRequest}
            />
          </View>
          <View style={styles.chatWrapper}>
            <View style={styles.messagesList}>{this.renderMessages()}</View>
            <View>
              <Line />
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
  headerTitle: 'Чат',
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
      fetchData,
      sendMessage,
      linkToNewMessage
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(ChatScreen)
