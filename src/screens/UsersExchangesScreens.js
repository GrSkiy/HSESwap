import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromUsersExchangeMinors, fetchData } from '../store/actions/api'

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
    exchangeMinors: state.exchangeMinors.entities,
    data_from_api: state.data_from_api
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
        this.props.fetchData(url, this.changeState)
      }
    }
  }

  changeState = (data) => {
    const newState = this.state
    newState.data = data
    newState.loading = false
    this.setState(newState)
  }

  render_exshanges = (exshanges) => {
    let items = []
    exshanges.forEach((exshange, i) => {
      items.push(
        <ExchangeCard
          minorName={exshange.responder_minor_name}
          result="Студент написал вам"
          time="15.55"
          handleClick={() =>
            this.props.navigation.navigate('Chat', {
              url: exshange.url,
              minorId: exshange.responder_minor_id,
              minorName: exshange.responder_minor_name,
              name: exshange.student_name,
              profile_id: this.state.data.profile_id
            })
          }
          key={i}
        />
      )
    })

    return items
  }

  render() {
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <ScrollView contentContainerStyle={styles.mainWrapper}>
        {this.render_exshanges(this.state.data.requests_for_profile_data)}
        {this.render_exshanges(this.state.data.requests_from_profile_data)}
      </ScrollView>
    )
  }
}

UsersExchangesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Обмены',
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
      linkFromUsersExchangeMinors,
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(UsersExchangesScreen)
