import React, { Component } from 'react'
import AppContainer from './AppContainer'

import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

import { bootstrap } from './src/bootstrap'
import store from './src/store/index'

bootstrap()

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('ping')
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
