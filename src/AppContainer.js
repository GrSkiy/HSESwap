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
  linkFromUsersData,
  linkForGuest,
  fetchData
} from './store/actions/api'

import { getToken, updateToken } from './store/actions/tokens'
import { updateUserInfo } from './store/actions/user'
// import { updateExchangeMinors } from './store/actions/exchangeMinors'

import { UserNavigation, GuestNavigation } from './AppNavigation'
import { PreloaderScreen } from './screens/PreloaderScreen'
import MainForGuestScreen from './screens/MainForGuestScreen'

function select(state) {
  return {
    tokens: state.tokens,
    userInfo: state.userInfo,
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
      console.log('********************************************')
      console.log('Redux Action getToken', result)
      console.log('********************************************')
      if (result === undefined) {
        console.log('App Container IT`s GUEST')
        this.props.linkForGuest()
      } else {
        console.log('App Container USER SIGN IN')
        const token = result['authenticity_token']
        this.props.linkFromUsersData(token)

        const { loaded } = this.state
        if (loaded) {
          const { url } = this.props.data_from_api
          if (url) {
            if (url.search('profiles') != -1) {
              this.setState({ loaded: false })
              this.props.fetchData(url, this.userDataMemorize)
            }
          }
        }
      }
    })
  }

  userDataMemorize = (data) => {
    DB.createUser(1, data).then((response) =>
      DB.getUserInfo(this.props.updateUserInfo)
    )
  }

  componentDidUpdate() {
    if (this.props.data_from_api.url !== '') {
      console.log('Start Fetching')
      fetch(this.props.data_from_api.url)
        .then((response) => response.json())
        .then((data) => {
          const { auth } = data
          if (auth) {
            console.log('!!!!!!!!!!!!!!!!!!!!')
            // const user = { auth: true }
            // this.props.updateUserInfo(user)
            console.log('USER IS AUTH')
            console.log('!!!!!!!!!!!!!!!!!!!!')
          }
        })

      // if (auth) {
      //   const { deviceToken, loaded } = this.props.tokens
      //   const { exchangeMinors } = this.props
      //   console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
      //   console.log('AppContainer PROPS', this.props)
      //   console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
      //   console.log('TOKEN AND LOAD STATE', deviceToken === '', loaded)
      //
      //   if (deviceToken === '' && loaded === true) {
      //     console.log('FIRST IF')
      //   } else if (deviceToken === '' && loaded === false) {
      //     console.log('SECOND IF')
      //     console.log('ADD NEW TOCKEN')
      //     if (this.props.data_from_api.url !== '') {
      //       console.log('Start Fetching')
      //       fetch(this.props.data_from_api.url)
      //         .then((response) => response.json())
      //         .then((data) => {
      //           console.log('Response from the server', data)
      //           DB.createToken(
      //             data.tokens.device_token,
      //             data.tokens.authenticity_token
      //           )
      //
      //           this.props.updateToken(data.tokens)
      //           this.props.updateUserInfo(data.user_info)
      //         })
      //     }
      //   } else if (deviceToken != '' && this.state.loaded) {
      //     //     // this.props.linkFromUsersData(deviceToken)
      //     //     // if (this.props.data_from_api.url !== '') {
      //     this.setState({ loaded: false })
      //     // }
      //   // }
      // } else {
      //
      //   console.log('NEW USER')
      // }
    }
  }

  render() {
    const { loaded } = this.state
    const { auth } = this.props.userInfo
    // const { deviceToken } = this.props.tokens
    // return !loaded ? (
    //   <Text>======================load</Text>
    // ) : auth ? (
    //   <Text>======================AUTH</Text>
    // ) : (
    //   <Text>======================GUEST</Text>
    // )
    return auth ? <UserNavigation /> : <GuestNavigation />
    // return deviceToken === '' ? (
    //   <PreloaderScreen />
    // ) : auth ? (
    //   <UserNavigation />
    // ) : (
    //   <GuestNavigation />
    // )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromTokens,
      linkFromUsersData,
      linkForGuest,
      getToken,
      updateToken,
      updateUserInfo,
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(AppContainer)
