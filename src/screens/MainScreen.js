import { StatusBar } from 'expo-status-bar'
import React, { useState, useContext } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Platform,
  Alert,
  TextInput
} from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import { createStackNavigator } from 'react-navigation-stack'

import Card from '../components/Card'

import { AppContext } from '../context/appContext'
import { connect } from 'react-redux'

import { getTokens } from '../store/actions/token'

const mapStateToProps = (store) => {
  // console.log(store)
  if (store.guest_token != null) {
    console.log(store.guest_token.resolve())
  }
  return {
    store: store
  }
}

class MainScreen extends React.Component {
  static contextType = AppContext
  constructor(props) {
    super(props)

    this.state = {
      exchange_minors: [],
      loading: true,
      guest_token: this.props.store.guest_token
    }
    // console.log(this.props)
  }

  async componentDidMount() {
    if (!this.context.loading) {
      if (!this.props.store.guest_token) {
        // this.props.getTokensAction()
        // console.log(this.props.store)
      }

      // console.log(this.state)
      // if (this.context.authenticity_token) {
      // } else {
      //   console.log('token is null')
      //   this.context.tokenFilling('TestState')
      //   console.log(this.context.authenticity_token)
      // }
      const url = `http://127.0.0.1:3000/api/v1/exchange_minors`
      const response = await fetch(url)
      const data = await response.json()

      this.setState({
        // authenticity_token: data.authenticity_token,
        exchange_minors: data.exchange_minors,
        loading: false
      })
    }
    // const url = `http://127.0.0.1:3000/api/v1/exchange_minors?${authenticity_token}`
  }

  renderCards = () => {
    const { navigate } = this.props.navigation
    const { exchange_minors } = this.state
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
            navigate('ExchangeCard', {
              url: url
            })
          }
          key={i}
        />
      )
    })

    return cardItems
  }

  createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )

  render() {
    const { exchange_minors, loading } = this.state
    // <Text> Loading ...</Text>

    return loading ? (
      <Text onPress={this.createTwoButtonAlert}>ALERT</Text>
    ) : (
      <ScrollView contentContainerStyle={styles.list}>
        {this.renderCards()}
      </ScrollView>
    )
  }
}

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Все объявления',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={'md-options-outline'}
        onPress={() => navigation.push('Filters')}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={'menu'}
        onPress={() => navigation.push('Profile')}
      />
    </HeaderButtons>
  )
})

const mapDispatchToProps = (dispatch) => {
  return {
    getTokensAction: () => dispatch(getTokens())
    // getTokensAction: async () => dispatch(await getTokens())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 20,
    marginTop: 20,
    marginLeft: 20
  },
  icon: {
    width: 30,
    height: 30
  },
  list: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 60
  },
  header: {
    zIndex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 31
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent: 'space-between'
  }
})
