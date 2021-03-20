import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromUsersExchangeMinors, fetchData } from '../store/actions/api'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'

import styles from '../stylesheets/main'

import MainButton from '../components/MainButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

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
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Chat', {
              url: exshange.url,
              profile_id: this.state.data.profile_id
            })
          }
          key={i}
        >
          <Text>{exshange.responder_minor_name}</Text>
          <Text>{exshange.responder_name}</Text>
        </TouchableOpacity>
      )
    })

    return items
  }

  render() {
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <ScrollView contentContainerStyle={styles.list}>
        {this.render_exshanges(this.state.data.requests_for_profile_data)}
        {this.render_exshanges(this.state.data.requests_from_profile_data)}
      </ScrollView>
    )
  }
}

UsersExchangesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Мои обмены'
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
