import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromLogIn, login } from '../store/actions/api'

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
  Dimensions
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
      loading: true
    }
  }

  componentDidMount() {
    this.props.linkFromLogIn()
  }

  newEmail = (email) => {
    this.props.login(this.props.data_from_api.url, email).then((data) => {
      const { pageData } = this.props.data_from_api
      if (pageData.approved) {
        this.props.navigation.navigate('EmailVerification', {
          data: pageData,
          tokens: this.props.tokens
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
      <View style={styles.backgroundImageContainer}>
        <Image
          style={styles.backgroundImage}
          resizeMode="scale"
          source={require('../../assets/png/Loginillustration.png')}
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
              />
            </View>
            {this.renderBut()}
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
      login
    },
    dispatch
  )

export default connect(select, mapDispatchToProps)(LogInScreen)
