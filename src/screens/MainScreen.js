import { StatusBar } from 'expo-status-bar'
import React, { useState, useContext } from 'react'
import { connect } from 'react-redux'

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

import { getToken, createToken } from '../store/actions/token'

function select(state) {
  return { token: state.token }
}

class MainScreen extends React.Component {
  static contextType = AppContext

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      exchange_minors: []
    }
  }

  componentDidMount() {
    console.log('context', this.context)
    const { devise_token, authenticity_token } = this.state

    if (!this.context.loading) {
      const url = `http://127.0.0.1:3000/api/v1/exchange_minors?devise_token=${devise_token}&authenticity_token=${authenticity_token}`
      console.log('URL', url)

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log('Response from the server', data)

          this.setState({
            devise_token: data.devise_token,
            authenticity_token: data.authenticity_token,
            exchange_minors: data.exchange_minors,
            loading: false
          })

          if (!this.props.store.devise_token) {
            this.props.createTokensAction(
              data.devise_token,
              data.authenticity_token
            )
          }
        })
    }
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
      <Text onPress={this.createTwoButtonAlert}>
        {this.props.token.devise_token} {this.props.token.authenticity_token}
      </Text>
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

export default connect(select)(MainScreen)

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
