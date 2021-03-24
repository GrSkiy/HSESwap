import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DB from '../db'

import {
  linkFromTokens,
  linkFromExchangeMinors,
  fetchData
} from '../store/actions/api'

import { getToken, updateToken } from '../store/actions/tokens'
import { getFilters } from '../store/actions/filters'
import { updateExchangeMinors } from '../store/actions/exchangeMinors'

import { UserNavigation, GuestNavigation } from '../navigation/AppNavigation'
import { PreloaderScreen } from './PreloaderScreen'
import MainForGuestScreen from './MainForGuestScreen'

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
      loaded: false
    }
  }

  componentDidMount() {
    const token = DB.getToken((result) => {
      console.log('Redux Action getToken', result)
      this.props.getToken(result)
    })
  }

  componentDidUpdate() {
    const { deviceToken, loaded } = this.props.tokens
    const { exchangeMinors } = this.props
    // const url = this.props.data_from_api.url
    // let { pageData } = this.props.data_from_api

    console.log('AppContainer PROPS', this.props)
    console.log(
      'TOKEN AND LOAD STATE',
      deviceToken === '',
      loaded === this.state.loaded
    )

    if (deviceToken === '' && loaded === false) {
      console.log('FIRST IF')
    } else if (deviceToken === '' && loaded === true) {
      console.log('SECOND IF')

      this.props.linkFromTokens()
      if (this.props.data_from_api.url !== '') {
        fetch(this.props.data_from_api.url)
          .then((response) => response.json())
          .then((data) => {
            console.log('Response from the server', data)

            this.props.updateToken(data.tokens)
            this.props.getFilters(data.filters)
          })
      }
    } else if (deviceToken != '' && this.state.loaded === false) {
      this.props.linkFromExchangeMinors(deviceToken)
      if (this.props.data_from_api.url !== '') {
        this.props.fetchData(
          this.props.data_from_api.url,
          this.props.updateExchangeMinors
        )
        this.setState({ loaded: true })
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
      fetchData,
      updateExchangeMinors
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(AppContainer)
