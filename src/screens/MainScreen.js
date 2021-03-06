import React, { useState, useContext } from 'react'

import DB from '../db'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  linkFromExchangeMinors,
  fetchData,
  linkForLogOut,
  logOut
} from '../store/actions/api'
import { removeTokens } from '../store/actions/tokens'
import { updateUserInfo } from '../store/actions/user'
import { updateExchangeMinors } from '../store/actions/exchangeMinors'

import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main.js'

import Hamburger from '../../assets/svg/hamburger.svg'
import ChatBubble from '../../assets/svg/chatBubble.svg'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import Burger from '../components/Burger'
import Card from '../components/Card'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api,
    user: state.userInfo,
    exchamgeMinors: state.exchangeMinors
  }
}

let burgerRef = React.createRef()

class MainScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      logOutLink: false
    }
  }

  componentDidMount() {
    console.log('INFO/INFO/INFO/INFO/INFO/INFO')
    // console.log(this.props.data_from_api)
    console.log(this.props.userInfo)
    // console.log(this.props.exchamgeMinors)
    console.log('INFO/INFO/INFO/INFO/INFO/INFO')

    const { deviceToken } = this.props.tokens
    this.props.linkFromExchangeMinors()
  }

  componentDidUpdate() {
    if (!this.state.logOutLink) {
      this.props.linkForLogOut()
      this.setState({ logOutLink: true })
    }
    if (this.state.loading) {
      const { url } = this.props.data_from_api
      if (url.search('minors') != -1) {
        this.props.fetchData(url).then(() => this.a())
        this.props.linkForLogOut()
      }
    }
  }

  a = () => {
    this.props.updateExchangeMinors(
      this.props.data_from_api.pageData.exchange_minors
    )
    this.setState({ loading: false })
  }

  renderCards = () => {
    const { push } = this.props.navigation
    const { exchamgeMinors } = this.props
    let cardItems = []

    exchamgeMinors.exchangeMinors.forEach((minor, i) => {
      const { city, year, address, credits, whishedMinors, url } = minor

      cardItems.push(
        <Card
          city={city}
          year={year}
          title={minor.minor}
          address={address}
          credits={credits}
          exchangeMinors={whishedMinors}
          handleBack={() =>
            push('ExchangeCard', {
              url: url
            })
          }
          key={i}
        />
      )
    })

    return cardItems
  }

  renderContent = () => {
    const { exchamgeMinors } = this.props

    // console.log(pageData)
    return this.state.loading && exchamgeMinors ? (
      <Text>Loading.....</Text>
    ) : !exchamgeMinors.exchangeMinors ? (
      <Text>Что-то пошло не так</Text>
    ) : exchamgeMinors.exchangeMinors.length == 0 ? (
      <Text>Майноров пока нет</Text>
    ) : (
      <ScrollView style={styles.mainWrapper}>{this.renderCards()}</ScrollView>
    )
    // ) : (
    // )
  }

  logOut = () => {
    console.log('+++++++++++ LOGOUT +++++++++++')
    this.props.logOut(this.props.data_from_api.url, this.props.tokens)
    burgerRef.close()
    this.props.removeTokens()
    this.props.updateUserInfo('', false)
    this.props.navigation.navigate('a')
  }

  render() {
    console.log('//////////MainScreen')
    console.log('//////////ExchangeMinors')

    // {this.props.token.device_token} {this.props.token.authenticity_token}
    return (
      <View>
        {this.renderContent()}
        <Burger
          ref={(target) => (burgerRef = target)}
          user={this.props.user}
          logOut={this.logOut}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}
// logOut={() => this.props.logOut(this.props.tokens.deviceToken)}

if (burgerRef) {
  MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Все объявления',
    headerRight: () => (
      // <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      //   <Item
      //     title="Toggle Drawer"
      //     iconName={'md-options-outline'}
      //     onPress={openPopUp}
      //   />
      // </HeaderButtons>
      <TouchableOpacity
        style={{
          width: 54,
          height: 44,
          paddingTop: 13,
          paddingLeft: 16
        }}
        onPress={() => navigation.navigate('Chat')}
      >
        <ChatBubble style={{ width: 18, height: 18 }} />
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity
        style={{
          width: 54,
          height: 44,
          paddingLeft: 20,
          paddingTop: 16
        }}
        onPress={burgerRef.show}
      >
        <Hamburger style={{ width: 18, height: 12 }} />
      </TouchableOpacity>
    )
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromExchangeMinors,
      fetchData,
      linkForLogOut,
      logOut,
      removeTokens,
      updateUserInfo,
      updateExchangeMinors
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(MainScreen)
