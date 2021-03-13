import React from 'react'

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { AppLoading } from 'expo-app-loading'

import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { deviseReducer } from './src/store/reducers/token'
import { connect } from 'react-redux'

import { AppContext, data } from './src/context/appContext'

const store = createStore(deviseReducer, applyMiddleware(thunk))

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticity_token: data.authenticity_token,
      pageState: data.pageState,
      tokenFilling: this.tokenFilling,
      getRequest: data.getRequest,
      loading: data.loading
    }
  }

  componentDidMount() {
    bootstrap()
    data.loading = false
    this.stateUpdate(data)
  }

  stateUpdate = (data) => {
    let appState = this.state
    appState.authenticity_token = data.authenticity_token
    appState.pageState = data.pageState
    appState.tokenFilling = this.tokenFilling
    appState.getRequest = data.getRequest
    appState.loading = data.loading
    this.setState(appState)
    // console.log(this.state)
  }

  tokenFilling = (token) => {
    let appState = this.state
    appState.authenticity_token = token
    this.setState(appState)
  }

  render() {
    return this.state.loading ? (
      <Text>loading//</Text>
    ) : (
      <Provider store={store}>
        <View style={styles.appContainer}>
          <AppContext.Provider value={this.state}>
            <AppNavigation />
          </AppContext.Provider>
        </View>
      </Provider>
    )
  }
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    backgroundColor: '#fff'
  }
})
