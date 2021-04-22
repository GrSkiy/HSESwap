import React, { useState, useContext } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromExchangeMinors, fetchData } from '../store/actions/api'

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
    data_from_api: state.data_from_api
  }
}

let burgerRef = React.createRef()

class MainScreen extends React.Component {
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
    const { push } = this.props.navigation
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
    return this.state.loading ? (
      <Text>Loading.....</Text>
    ) : this.state.data.exchange_minors === undefined ? (
      <Text>Ой, что-то пошло не так</Text>
    ) : this.state.data.exchange_minors.length == 0 ? (
      <Text>Майноров пока нет</Text>
    ) : (
      <ScrollView style={styles.mainWrapper}>{this.renderCards()}</ScrollView>
    )
  }

  render() {
    // {this.props.token.device_token} {this.props.token.authenticity_token}
    return (
      <View>
        {this.renderContent()}
        <Burger ref={(target) => (burgerRef = target)} />
      </View>
    )
  }
}

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
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(MainScreen)
