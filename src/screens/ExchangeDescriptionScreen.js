import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromAllMinors, fetchData } from '../store/actions/api'

import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main.js'

import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import MainButton from '../components/MainButton'
import Banner from '../components/Banner'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api,
    userInfo: state.userInfo
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
    console.log(this.props.tokens)
    console.log(this.props.navigation.getParam('url'))
    if (this.state.loading) {
      this.props
        .fetchData(this.props.navigation.getParam('url'))
        .then(() => this.setState({ loading: false }))
    }
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
    } = this.props.data_from_api.pageData
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
  //
  //   createExchangeMinor = async () => {
  //     console.log(this.state)
  //
  //     let data = {
  //       process: 'create',
  //       id: this.state.data.id,
  //       userID: 1,
  //       student_id: this.state.data.student_id
  //
  //       // approved: approved
  //     }
  //
  //     console.log(data)
  //     await fetch(`http://127.0.0.1:3000/api/v1/exchange_requests`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data)
  //     })
  //
  //     this.props.navigation.navigate('Login')
  //   }
  //
  renderMainButton = (login) => {
    if (login) {
      return (
        <MainButton
          title="Предложить обмен"
          onPress={this.createExchangeMinor}
        />
      )
    } else {
      return (
        <Banner
          className="reg"
          handleClick={() => this.props.navigation.navigate('Login')}
        />
      )
    }
  }

  render() {
    console.log('/////////////////////')
    console.log(this.props.data_from_api)
    console.log(this.state)

    const { auth } = this.props.userInfo

    // <View style={styles.suitsContainer}>
    //   <Text style={styles.suitsText}>{suitsText}</Text>
    // </View>
    // <SafeAreaView>
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.screenWithButtonOnBottom}>
          <View>{this.renderContent()}</View>
          {this.renderMainButton(auth)}
        </View>
      </SafeAreaView>
    )
  }
}

ExchangeDescriptionScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Объявление обмена',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.navigate('App')}
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

export default connect(select, mapDispatchToProps)(ExchangeDescriptionScreen)
