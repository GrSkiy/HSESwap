import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../store/actions/api'

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
    tokens: state.tokens
  }
}

class LogInScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  newEmail = (data) => {
    if (data.approved) {
      this.props.navigation.navigate('EmailVerification', { data: data })
    } else {
      console.log('something happened T_T')
    }
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
        onPress={() => this.props.login(this.newEmail, this.state.email)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(LogInScreen)
