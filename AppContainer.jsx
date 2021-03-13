import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DB from './src/db'

import { getToken, updateToken } from './src/store/actions/tokens'
import { getFilters } from './src/store/actions/filters'
import { updateExchangeMinors } from './src/store/actions/exchangeMinors'

import { AppNavigation } from './src/navigation/AppNavigation'
import { PreloaderScreen } from './src/screens/PreloaderScreen'

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities
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

    console.log('AppContainer PROPS', this.props)
    console.log('TOKEN AND LOAD STATE', deviceToken === '', loaded === false)

    if (deviceToken === '' && loaded === false) {
      console.log('FIRST IF')
    } else if (deviceToken === '' && loaded === true) {
      console.log('SECOND IF')
      const url = 'http://127.0.0.1:3000/api/v1/login/guest'

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log('Response from the server', data)

          this.props.updateToken(data.tokens)
          this.props.getFilters(data.filters)
        })
    } else if (deviceToken != '' && this.state.loaded === false) {
      const url = `http://127.0.0.1:3000/api/v1/exchange_minors?device_token=${deviceToken}`

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(
            'Response from the server on Exchange Minor request',
            data
          )

          // this.props.updateAuthToken(data)
          this.props.updateExchangeMinors(data)

          // Это нужно на время, чтобы случайно не было инфинити лупа
          this.setState({ loaded: true })
        })
    }
  }

  render() {
    console.log('AppContainer', this.props)
    const { deviceToken } = this.props.tokens
    return deviceToken === '' ? <PreloaderScreen /> : <AppNavigation />
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getToken,
      updateToken,
      getFilters,
      updateExchangeMinors
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(AppContainer)
