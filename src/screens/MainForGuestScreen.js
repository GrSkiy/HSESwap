import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromExchangeMinors, fetchData } from '../store/actions/api'

import { ScrollView, View, Text } from 'react-native'

import styles from '../stylesheets/main.js'

import Banner from '../components/Banner'
import Card from '../components/Card'
import { createStackNavigator } from 'react-navigation-stack'

import Select from '../components/Select'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api
  }
}

class MainForGuestScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const { deviceToken } = this.props.tokens
    this.props.linkFromExchangeMinors()
  }

  componentDidUpdate() {
    if (this.state.loading) {
      const { url } = this.props.data_from_api
      if (url.search('minors') != -1) {
        this.props.fetchData(url, this.changeState)
      }
    }
  }

  changeState = (data) => {
    const newState = this.state
    newState.data = data
    newState.loading = false
    this.setState(newState)
  }

  renderCards = () => {
    const { navigation } = this.props
    const { exchange_minors } = this.state.data
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
    return this.state.loading ? (
      <Text>Loading.....</Text>
    ) : (
      <ScrollView contentContainerStyle={styles.mainWrapper}>
        <Banner
          className="reg"
          handleClick={() => this.props.navigation.navigate('Login')}
        />
        {this.renderCards()}
      </ScrollView>
    )
  }
}

MainForGuestScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Все объявления'
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromExchangeMinors,
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(MainForGuestScreen)
