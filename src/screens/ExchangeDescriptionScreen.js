import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromAllMinors, fetchData } from '../store/actions/api'

import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main.js'

import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import MainButton from '../components/MainButton'

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities,
    data_from_api: state.data_from_api
  }
}

class ExchangeDescriptionScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    if (this.state.loading) {
      const url = this.props.navigation.getParam('url')
      this.props.fetchData(url, this.changeState)
    }
  }

  changeState = (data) => {
    const newState = this.state
    newState.data = data
    newState.loading = false
    this.setState(newState)
  }

  // let suitsText = "";
  //
  // if (suits) {
  //   suitsText = "Студент хочет твой майнор!";
  // } else {
  //   let suitsText = "";
  // }

  renderContent = () => {
    const {
      handleReadMore,
      minor,
      credits,
      address,
      responsible,
      description,
      suits,
      mainButtonHandle,
      url
    } = this.state.data
    // <Text style={styles.credits}>{credits}</Text>
    // <Text style={styles.address}>{address}</Text>
    return (
      <View>
        <View style={styles.exchanheMinorHeader}>
          <Text style={styles.h1}>{minor}</Text>
          <View style={styles.creditAddresssContainer}>
            <View style={styles.chipsContainer}>
              <Text style={styles.h2}>Кредиты</Text>
              <Text style={styles.chips}>45</Text>
            </View>
            <View style={styles.chipsContainer}>
              <Text style={styles.h2}>Адрес</Text>
              <Text style={styles.chips}>
                Ул. Стараная Басманная, д.24/1, стр. 3
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.h2}>Ответственный за майнор</Text>
            <View style={styles.responsibleContainer}>
              <Text style={styles.link}>{responsible}</Text>
              <Ionicons name="mail-outline" size={18} color="#0488FF" />
            </View>
          </View>
        </View>

        <View style={styles.border}></View>

        <View style={styles.exchanheMinorDescription}>
          <View style={styles.descriptionheader}>
            <Text style={styles.h2}>Описание майнора</Text>
            <TouchableOpacity onPress={() => console.log(url)}>
              <Text style={styles.link}>Подробнее</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.paragraph}>{description}</Text>
        </View>
      </View>
    )
  }

  renderMainButton = (login) => {
    if (login) {
      return (
        <MainButton
          title="Предложить обмен"
          onPress={() => this.props.navigation.push('SuccessExchange')}
        />
      )
    } else {
      return (
        <MainButton
          title="Предложить обмен"
          onPress={() => this.props.navigation.push('Login')}
        />
      )
    }
  }

  render() {
    const login = this.props.navigation.getParam('login')
    // <View style={styles.suitsContainer}>
    //   <Text style={styles.suitsText}>{suitsText}</Text>
    // </View>
    // <SafeAreaView>
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.screenWithButtonOnBottom}>
          {this.renderContent()}
          {this.renderMainButton(login)}
        </View>
      </SafeAreaView>
    )
  }
}

ExchangeDescriptionScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Объявление обмена',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
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

export default connect(select, mapDispatchToProps)(ExchangeDescriptionScreen)
