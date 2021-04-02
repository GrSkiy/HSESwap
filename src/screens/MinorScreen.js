import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchData } from '../store/actions/api'

import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from '../stylesheets/main'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities,
    data_from_api: state.data_from_api
  }
}

class MinorScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  async componentDidMount() {
    const url = this.props.navigation.getParam('url')
    this.props.fetchData(url, this.changeState)
  }

  changeState = (data) => {
    const newState = this.state
    newState.data = data
    newState.loading = false
    this.setState(newState)
  }

  renderContent = () => {
    let {
      handleReadMore,
      name,
      credits,
      address,
      responsible,
      minorDescription
    } = this.state.data
    return (
      <View style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text style={styles.headerMinor}>Название майнора</Text>
          <Text style={styles.minorName}>{name}</Text>
        </View>
        <View style={styles.creditAddresssContainer}>
          <View style={styles.creditsContainer}>
            <Text style={styles.headerCredits}>Кредиты</Text>
            <Text style={styles.credits}>{credits}</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.header}>Адрес</Text>
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Ответственный за майнор</Text>
          <Text style={styles.head}>{responsible}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.header}>Описание майнора</Text>
          <Text style={styles.description}>{minorDescription}</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log(';handleReadMore')}
          style={styles.reedMoreContainer}
        >
          <Text style={styles.readMoreText}>Читать дальше</Text>
          <Image
            style={styles.readMoreLink}
            source={require('../../assets/png/readMoreLink2x.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <SafeAreaView style={styles.safeArea}>
        {this.renderContent()}
      </SafeAreaView>
    )
  }
}

MinorScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Все майноры',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(MinorScreen)
