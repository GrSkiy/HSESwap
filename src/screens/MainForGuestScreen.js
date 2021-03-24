import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ScrollView, View } from 'react-native'

import styles from '../stylesheets/main.js'

import Card from '../components/Card'
import { createStackNavigator } from 'react-navigation-stack'

import Select from '../components/Select'

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities
  }
}

class MainForGuestScreen extends Component {
  constructor(props) {
    super(props)
  }

  renderCards = () => {
    const { navigation } = this.props
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
            navigation.push('ExchangeCard', {
              url: url,
              login: false
            })
          }
          key={i}
        />
      )
    })

    return cardItems
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.mainWrapper}>
        {this.renderCards()}
      </ScrollView>
    )
  }
}

MainForGuestScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Все объявления'
})

export default connect(select)(MainForGuestScreen)
