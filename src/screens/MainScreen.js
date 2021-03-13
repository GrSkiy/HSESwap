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

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities
  }
}

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  renderCards = () => {
    const { navigate } = this.props.navigation
    const { exchangeMinors } = this.props
    let cardItems = []

    exchangeMinors.forEach((minor, i) => {
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
    const { exchangeMinors } = this.props

    console.log('MainScreen', exchangeMinors)

    return exchangeMinors === undefined ||
      exchangeMinors.length === undefined ? (
      <Text onPress={this.createTwoButtonAlert}>
        {this.props.token.device_token} {this.props.token.authenticity_token}
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
