import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromAllMinors, fetchData } from '../store/actions/api'

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  ScrollView
} from 'react-native'

import BackArrow from '../../assets/svg/backArrow.svg'
import EmailIcon from '../../assets/svg/emailIcon.svg'

import styles from '../stylesheets/main.js'

import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import MainButton from '../components/MainButton'
import Banner from '../components/Banner'
import ButtonSet from '../components/ButtonSet'

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
    console.log(this.props.tokens.authenticityToken)
    console.log(this.props.navigation.getParam('url'))

    const authenticity_token = this.props.tokens.authenticityToken
    const device_token = this.props.tokens.deviceToken

    if (this.state.loading) {
      if (this.props.tokens.deviceToken) {
        const url =
          this.props.navigation.getParam('url') +
          '?authenticity_token=' +
          authenticity_token +
          '&device_token=' +
          device_token

        console.log(url)

        this.props
          .fetchData(this.props.navigation.getParam('url'))
          .then(() => this.setState({ loading: false }))
      } else {
        this.props
          .fetchData(this.props.navigation.getParam('url'))
          .then(() => this.setState({ loading: false }))
      }
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
      url,
      whishedMinors
    } = this.props.data_from_api.pageData

    let userName = 'Ворона любви'
    userName += ' меняет'

    // console.log('___________________________')
    // console.log(this.props.data_from_api.pageData)
    // console.log('___________________________')
    // console.log('aaaaaa.aaaa')
    // console.log(whished_minors[0])
    // console.log('aaaaaaaaaa')

    // <Text style={styles.credits}>{credits}</Text>
    // <Text style={styles.address}>{address}</Text>

    return (
      <View>
        <ScrollView style={styles.mainWrapperExchangeDescriptionScreen}>
          <View style={styles.exchangeMinorHeader}>
            <Text style={{ marginBottom: 12 }}>{userName}</Text>
            <Text style={styles.h1}>{minor}</Text>
            <View style={{ marginTop: 12 }}>
              <Text style={{ marginBottom: 6 }}>Желаемые майноры</Text>
              <ButtonSet wished_minors={whishedMinors} />
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={{ fontSize: 22, fontWeight: '500' }}>
                Подробнее о майноре
              </Text>
              <View style={styles.creditAddresssContainer}>
                <View style={styles.chipsContainer}>
                  <Text style={styles.h2}>Кредиты</Text>
                  <Text style={styles.chipsCredits}>45</Text>
                </View>
                <View style={styles.chipsContainer}>
                  <Text style={styles.h2}>Адрес</Text>
                  <Text style={styles.chips}>
                    Ул. Стараная Басманная, д.24/1, стр.
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.responsibleMainContainer}>
              <View style={styles.responsibleContainer}>
                <Text style={styles.h2}>Ответственный за майнор</Text>
                <Text style={styles.link}>{responsible}</Text>
              </View>
              <EmailIcon style={{ width: 18, height: 14 }} />
            </TouchableOpacity>
          </View>

          <View style={styles.exchangeMinorDescription}>
            <View style={styles.descriptionheader}>
              <Text style={styles.h2}>Описание майнора</Text>
              <TouchableOpacity onPress={() => console.log(url)}>
                <Text style={styles.linkReadMore}>Читать подробнее</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.paragraph}>{description}</Text>
          </View>
        </ScrollView>
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
        <View
          style={{
            height: '14%',
            position: 'absolute',
            width: '100%',
            backgroundColor: '#fff',
            bottom: 0,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <MainButton
            title="Предложить обмен"
            onPress={this.createExchangeMinor}
          />
        </View>
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
    <Pressable
      onPress={() => navigation.goBack(null)}
      style={{ width: 40, height: 40, flex: 1, justifyContent: 'center' }}
    >
      <BackArrow />
    </Pressable>
  ),
  headerStatusBarHeight: 50,
  headerLeftContainerStyle: {
    paddingLeft: 20
  }
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
