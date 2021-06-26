import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromLogIn, login, linktoLogIn } from '../store/actions/api'

// import BackArrow from '../../assets/svg/BackArrow.svg'

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
  TouchableHighlight,
  Pressable,
  Image,
  Dimensions,
  Keyboard
} from 'react-native'

import BackArrow from '../../assets/svg/backArrow.svg'

import styles from '../stylesheets/main.js'

// import { AntDesign } from '@expo/vector-icons'

import LinkButton from '../components/LinkButton'
import MainButton from '../components/MainButton'
import LargeInput from '../components/LargeInput'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

function select(state) {
  return {
    data_from_api: state.data_from_api
  }
}

class LogInScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      loading: true,
      containerHeight: '0%'
    }
  }

  componentDidMount() {
    this.props.linkFromLogIn()
    Keyboard.addListener('keyboardWillShow', () => {
      this.changeContainerHeight('-40%')
    })
    Keyboard.addListener('keyboardWillHide', () => {
      this.changeContainerHeight('0%')
    })
  }

  componentDidUpdate() {
    const { url } = this.props.data_from_api

    if (url.search('login') != -1) {
      this.props.linktoLogIn()
      this.setState(
        Object.assign({}, this.state, {
          get_password_url: url
        })
      )
    }
    // if (props.data_from_api.url)
    // const get_password_url = props.data_from_api.url
  }

  changeContainerHeight = (percentage) => {
    this.setState(
      Object.assign({}, this.state, {
        containerHeight: percentage
      })
    )
  }

  newEmail = (email) => {
    const { get_password_url } = this.state
    this.props.login(get_password_url, email).then((data) => {
      const { pageData } = this.props.data_from_api
      if (pageData.approved) {
        this.props.navigation.navigate('EmailVerification', {
          data: pageData,
          tokens: this.props.tokens,
          get_password_url: get_password_url,
          login_link: this.props.data_from_api.url,
          email: email
        })
      } else {
        console.log('something happened T_T')
      }
    })
  }

  setEmail = (text) => {
    this.setState({ email: text })
  }

  renderBut = () => {
    const { email } = this.state

    return email.search('@edu.hse.ru') != -1 ? (
      <MainButton
        title="Далее"
        className="active"
        onPress={() => this.newEmail(email)}
      />
    ) : (
      <MainButton title="Далее" className="inactive" />
    )
  }

  render() {
    return (
      <View
        style={{
          marginTop: 20,
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: this.state.containerHeight,
          zIndex: -10
        }}
      >
        <Image
          style={styles.backgroundImage}
          resizeMode="stretch"
          source={require('../../assets/png/LogInIllustration.png')}
        />
        <View style={styles.mainWrapper}>
          <View style={styles.screenWithButtonOnBottom}>
            <View style={styles.loginContainer}>
              <Text style={styles.h1}>Вход по почте HSE</Text>
              <View style={styles.liginPadding}></View>
              <LargeInput
                lableText="Корпоративная почта hse"
                placeholder="youe@edu.hse.ru"
                setText={this.setEmail}
                // onPress={this.changeContainerHeight}
              />
            </View>
            <View style={styles.logInButtonContainer}>{this.renderBut()}</View>
          </View>
        </View>
      </View>
    )
  }
}

LogInScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Вход',
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      linkFromLogIn,
      login,
      linktoLogIn
    },
    dispatch
  )

export default connect(select, mapDispatchToProps)(LogInScreen)
