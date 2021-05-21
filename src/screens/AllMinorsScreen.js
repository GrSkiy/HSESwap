import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromAllMinors, fetchData } from '../store/actions/api'

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'

import styles from '../stylesheets/main'

import { MaterialIcons } from '@expo/vector-icons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import Card from '../components/Card'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api
  }
}

class AllMinorsScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.linkFromAllMinors()
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
    const cities = this.state.data
    let bloks = []
    let minors = []
    cities.forEach((city, i) => {
      city.minors.forEach((minor, y) => {
        minors.push(
          <Card
            city={city.city}
            year={minor.year}
            title={minor.name}
            address={minor.address}
            credits={minor.credits}
            handleBack={() =>
              this.props.navigation.navigate('Minor', {
                url: minor.url
              })
            }
            exchangeMinors={[]}
            key={i + '_' + y}
          />
        )
      })
    })

    return <ScrollView contentContainerStyle={styles.list}>{minors}</ScrollView>
  }

  render() {
    return this.state.loading ? (
      <Text>Loading.....</Text>
    ) : (
      <ScrollView style={styles.mainWrapper}>{this.renderCards()}</ScrollView>
    )
  }
}

AllMinorsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Все майноры',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack(null)}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromAllMinors,
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(AllMinorsScreen)
