import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromUsersExchangeMinors, fetchData } from '../store/actions/api'
import { changeExchanges } from '../store/actions/usersExchanges'

import { Text, ScrollView, TouchableOpacity } from 'react-native'

import styles from '../stylesheets/main'

import ExchangeCard from '../components/ExchangeCard'
import { MaterialIcons } from '@expo/vector-icons'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

//Брать статус чата
//брать и выводить время последнего сообщения

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api,
    usersExchanges: state.usersExchanges
  }
}

class UsersExchangesScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.linkFromUsersExchangeMinors()
  }

  componentDidUpdate() {
    if (this.state.loading) {
      const { url } = this.props.data_from_api
      if (url.search('exchange_requests') != -1) {
        this.props.fetchData(url).then(this.storeFilling)
      }
    }
  }

  storeFilling = () => {
    this.props.changeExchanges(this.props.data_from_api.pageData)
    this.setState({ loading: false })
  }

  render_exshanges = (exshanges) => {
    const data = this.props.data_from_api.pageData
    let items = []
    if (exshanges) {
      exshanges.forEach((exshange, i) => {
        let status = exshange.status
        if (status == 'process') {
          status = 'Процесс обмена'
        } else if (status == 'start') {
          if (exshange.responder_id == data.profile_id) {
            status = 'Вам отправили запрос на обмен'
          } else {
            status = 'Ждем ответа от студента'
          }
        } else if (status == 'reqected') {
          status = 'Студент отклонил ваш запрос'
        } else if (status == 'impossible to complete') {
          status = 'Невозможно завершить обен'
        } else if (status == 'complete') {
          status = 'Обмен состоялся'
        }

        items.push(
          <ExchangeCard
            minorName={exshange.responder_minor_name}
            result={status}
            time="15.55"
            handleClick={() =>
              this.props.navigation.navigate('Chat', {
                id: exshange.id,
                url: exshange.url,
                profile_id: data,
                exchange_status: status,
                responder_id: exshange.responder_id,
                requester_id: exshange.requester_id,
                minorId: exshange.responder_minor_id,
                minorName: exshange.responder_minor_name,
                user_status:
                  data.profile_id == exshange.requester_id
                    ? exshange.requester_status
                    : exshange.responder_status,
                student_status:
                  exshange.responder_status == exshange.responder_id
                    ? exshange.responder_status
                    : exshange.requester_id
              })
            }
            key={i}
          />
        )
      })
    }

    return items
  }

  render() {
    const {
      requests_for_profile_data,
      requests_from_profile_data
    } = this.props.usersExchanges.usersExchanges
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <ScrollView contentContainerStyle={styles.mainWrapper}>
        {this.render_exshanges(requests_for_profile_data)}
        {this.render_exshanges(requests_from_profile_data)}
      </ScrollView>
    )
  }
}

UsersExchangesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Обмены',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack(null)}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromUsersExchangeMinors,
      fetchData,
      changeExchanges
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(UsersExchangesScreen)
