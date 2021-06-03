import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromLogIn, login } from '../store/actions/api'

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Platform
} from 'react-native'
import styles from '../stylesheets/main.js'

import { MaterialIcons } from '@expo/vector-icons'

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
    )
  }
}

LogInScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Вход',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack(null)}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  )
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
