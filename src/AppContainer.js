import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'

import DB from './db'

import {
  linkFromTokens,
  linkFromExchangeMinors,
  fetchData
} from './store/actions/api'

import { getToken, updateToken } from './store/actions/tokens'
import { getFilters } from './store/actions/filters'
// import { updateExchangeMinors } from './store/actions/exchangeMinors'

import { UserNavigation, GuestNavigation } from './AppNavigation'
import { PreloaderScreen } from './screens/PreloaderScreen'
import MainForGuestScreen from './screens/MainForGuestScreen'

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities,
    data_from_api: state.data_from_api
    // url: state.data_from_api.url,
    // pageData: state.data_from_api.pageData
  }
}

class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: true
    }
  }

  componentDidMount() {
    DB.getToken((result) => {
      console.log('Redux Action getToken', result)
      if (result === undefined) {
        console.log('App Container DB.createToken')
        this.props.linkFromTokens()
      } else {
        this.props.updateToken(result)
        console.log(result)
      }
    })
  }

  componentDidUpdate() {
    const { deviceToken, loaded } = this.props.tokens
    const { exchangeMinors } = this.props

    console.log('AppContainer PROPS', this.props)
    console.log('TOKEN AND LOAD STATE', deviceToken === '', loaded)

    if (deviceToken === '' && loaded === true) {
      console.log('FIRST IF')
    } else if (deviceToken === '' && loaded === false) {
      console.log('SECOND IF')
      console.log(this.props.data_from_api.url)
      if (this.props.data_from_api.url !== '') {
        console.log('Start Fetching')
        fetch(this.props.data_from_api.url)
          .then((response) => response.json())
          .then((data) => {
            console.log('Response from the server', data)
            DB.createToken(
              data.tokens.device_token,
              data.tokens.authenticity_token
            )
            this.props.updateToken(data.tokens)
            // this.props.getFilters(data.filters)
          })
      }
    } else if (deviceToken != '' && this.state.loaded === false) {
      this.props.linkFromExchangeMinors(deviceToken)
      if (this.props.data_from_api.url !== '') {
        this.setState({ loaded: false })
      }
    }
  }

  render() {
    console.log('AppContainer', this.props)
    // const login = false
    const login = true
    const { deviceToken } = this.props.tokens
    return deviceToken === '' ? (
      <PreloaderScreen />
    ) : login ? (
      <UserNavigation />
    ) : (
      <GuestNavigation />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromTokens,
      linkFromExchangeMinors,
      getToken,
      updateToken,
      getFilters,
      fetchData
      // updateExchangeMinors
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(AppContainer)
