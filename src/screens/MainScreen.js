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

import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main.js'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import Burger from '../components/Burger'
import Card from '../components/Card'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api,
    user: state.userInfo
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
    const { deviceToken } = this.props.tokens
    console.log(deviceToken)
    this.props.linkFromExchangeMinors()
  }

  componentDidUpdate() {
    if (this.state.loading) {
      this.setState({ loading: false })
      const { url } = this.props.data_from_api
      if (url.search('minors') != -1) {
        console.log('FETCH')
        this.props.fetchData(url)
        this.props.linkForLogOut()
      }
    }
  }

  renderCards = () => {
    const { push } = this.props.navigation
    const { exchange_minors } = this.props.data_from_api.pageData
    let cardItems = []

    exchange_minors.forEach((minor, i) => {
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
    const { pageData } = this.props.data_from_api
    if (!this.state.logOutLink) {
      this.props.linkForLogOut()
      this.setState({ logOutLink: true })
    }
    return this.state.loading ? (
      <Text>Loading.....</Text>
    ) : pageData.exchange_minors === undefined ? (
      <Text>Ой, что-то пошло не так</Text>
    ) : pageData.exchange_minors.length == 0 ? (
      <Text>Майноров пока нет</Text>
    ) : (
      <ScrollView style={styles.mainWrapper}>{this.renderCards()}</ScrollView>
    )
  }

  logOut = () => {
    this.props.logOut(this.props.data_from_api.url, this.props.tokens)
    burgerRef.close()
    this.props.navigation.navigate('a')
  }

  render() {
    console.log('//////////MainScreen')

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
      style={{ paddingRight: 20 }}
      onPress={() => navigation.navigate('Chat')}
    >
      <Ionicons name="chatbubble-outline" size={24} color="#005AAB" />
    </TouchableOpacity>
  ),
  headerLeft: () => (
    <TouchableOpacity style={{ paddingLeft: 20 }} onPress={burgerRef.show}>
      <MaterialIcons name="menu" size={25} color="#005AAB" />
    </TouchableOpacity>
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromExchangeMinors,
      fetchData,
      linkForLogOut,
      logOut
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(MainScreen)
