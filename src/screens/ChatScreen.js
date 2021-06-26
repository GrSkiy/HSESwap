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
    url: state.url,
    userInfo: state.userInfo
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
    this.props.fetchData(url).then(this.props.linkToNewMessage)
  }

  componentDidUpdate() {
    const { url } = this.props.data_from_api
    if (url.search('messages') != -1 && this.state.loading) {
      let newState = Object.assign({}, this.state)
      newState.newMessageUrl = url
      newState.chatData = this.props.data_from_api.pageData
      newState.profile_id = this.props.navigation.getParam(
        'profile_id'
      ).profile_id
      newState.loading = false

      this.setState(newState)

      const channel = cable.setChannel(
        `room_channel_${this.props.data_from_api.pageData.data.id}`,
        actionCable.subscriptions.create({
          channel: 'RoomChannel',
          room_id: this.props.data_from_api.pageData.data.id
        })
      )
      channel.on('received', this.sentMessage)
    }
  }

  sentMessage = (data) => {
    console.log(data)
    // let state = this.state
    // const newMessage = {
    //   content: data.content
    // }
    // state.chatData.messages.push(data)
    // this.setState(state)
  }

  changeTetx = (text) => {
    let data = this.state
    data.message = text
    this.setState(data)
  }

  //new_message

  confirmation = () => {
    let message = {
      profile_id: this.state.profile_id,
      exchange_request_id: this.state.chatData.data.id,
      content: this.state.message
    }

    this.props.sendMessage(message, this.state.newMessageUrl)

    this.setState({ message: '' })
  }

  renderMessages = () => {
    const { messages } = this.props.data_from_api.pageData
    let messages_items = []

    // messages.forEach((message, i) => {
    //   if (message.profile_id == this.state.profile_id) {
    //     messages_items.push(
    //       <Message
    //         content={message.content}
    //         className="my"
    //         time={message.created_at}
    //         key={i}
    //       />
    //     )
    //   } else {
    //     messages_items.push(
    //       <Message
    //         content={message.content}
    //         className="their"
    //         time={message.created_at}
    //         key={i}
    //       />
    //     )
    //   }
    // })

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
    // console.log(this.state)
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
