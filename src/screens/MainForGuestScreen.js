import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromExchangeMinors, fetchData } from '../store/actions/api'
import { updateExchangeMinors } from '../store/actions/exchangeMinors'

import { ScrollView, View, Text, TouchableOpacity } from 'react-native'

import styles from '../stylesheets/main.js'

import Banner from '../components/Banner'
import Card from '../components/Card'
import { createStackNavigator } from 'react-navigation-stack'

import Select from '../components/Select'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api,
    exchangeMinors: state.exchangeMinors
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
      console.log(url)

      if (url.search('exchange_minors') != -1) {
        this.props.fetchData(url).then(() => this.a())
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
    const { navigation } = this.props
    const { exchangeMinors } = this.props.exchangeMinors
    console.log(this.props)
    let cardItems = []

    if (exchangeMinors) {
      console.log(exchangeMinors)
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
    }

    return cardItems
  }

  // renderWished = () => {
  //   const { navigation } = this.props
  //   const { exchangeMinors } = this.props
  //   let wishedItems = []
  //
  //   if (exchangeMinors) {
  //     exchangeMinors.forEach((minor, i) => {
  //       const { city, year, address, credits, whishedMinors, url } = minor
  //       cardItems.push(
  //         <Card
  //           city={city}
  //           year={year}
  //           title={minor.minor}
  //           address={address}
  //           credits={credits}
  //           exchangeMinors={whishedMinors}
  //           handleBack={() =>
  //             navigation.push('ExchangeCard', {
  //               url: url,
  //               login: false
  //             })
  //           }
  //           key={i}
  //         />
  //       )
  //     })
  //   }
  //
  //   return cardItems
  // }

  render() {
    console.log('____________1______')
    console.log(this.state)
    console.log(this.props.exchangeMinors)
    console.log(this.props.data_from_api)

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
  headerTitle: 'Все объявления',
  headerStatusBarHeight: 50
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromExchangeMinors,
      fetchData,
      updateExchangeMinors
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(MainForGuestScreen)
