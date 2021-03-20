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
import styles from '../stylesheets/main.js'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import FiltersScreen from './FiltersScreen'

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

  componentDidMount() {
    console.log(this.props)
    const { deviceToken } = this.props.tokens
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

  render() {
    const { exchangeMinors } = this.props

    console.log('MainScreen', exchangeMinors)

    //начало всплывающиз инпутов
    // let filtersRef = React.forwardRef()
    // <FiltersScreen ref={(target) => (filtersRef = target)} />
    // <FiltersScreen />

    // {this.props.token.device_token} {this.props.token.authenticity_token}
    return exchangeMinors === undefined ||
      exchangeMinors.length === undefined ? (
      <Text> l,kmskmak</Text>
    ) : (
      <View>
        <ScrollView contentContainerStyle={styles.mainWrapper}>
          {this.renderCards()}
        </ScrollView>
      </View>
    )
  }
}

const openPopUp = () => {
  console.log('open filters pop up')
  // filtersRef.show()
}

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Все объявления',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={'md-options-outline'}
        onPress={openPopUp}
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
