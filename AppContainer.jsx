import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DB from './src/db'

import {
  linkFromTokens,
  linkFromExchangeMinors,
  fetchData
} from './src/store/actions/api'
import { getToken, updateToken } from './src/store/actions/tokens'
import { getFilters } from './src/store/actions/filters'
import { updateExchangeMinors } from './src/store/actions/exchangeMinors'

import { AppNavigation } from './src/navigation/AppNavigation'
import { PreloaderScreen } from './src/screens/PreloaderScreen'

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
      console.log('000000000000000000000000000')
      console.log(this.props.data_from_api.url)
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
    const { deviceToken } = this.props.tokens
    return deviceToken === '' ? <PreloaderScreen /> : <AppNavigation />
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
