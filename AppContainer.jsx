import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DB from './src/db'
import { getToken, updateToken } from './src/store/actions/token'

import { AppNavigation } from './src/navigation/AppNavigation'
import { PreloaderScreen } from './src/screens/PreloaderScreen'

function select(state) {
  return { token: state.token }
}

class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const token = DB.getToken((result) => {
      console.log('Redux Action getToken', result)
      this.props.getToken(result)
    })
  }

  componentDidUpdate() {
    if (this.props.token.devise_token === '') {
      const url = 'http://127.0.0.1:3000/api/v1/login/guest'

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log('Response from the server', data)

          this.props.updateToken(data)
        })
    }
  }

  render() {
    const { devise_token } = this.props.token
    return devise_token === '' ? <PreloaderScreen /> : <AppNavigation />
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getToken, updateToken }, dispatch)
}

export default connect(select, mapDispatchToProps)(AppContainer)
