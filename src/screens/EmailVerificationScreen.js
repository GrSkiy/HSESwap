import React, { useState, Fragment } from 'react'

import DB from '../db'

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Pressable
} from 'react-native'

import BackArrow from '../../assets/svg/backArrow.svg'

import styles from '../stylesheets/main'

import SmallNumberInput from '../components/SmallNumberInput'
import LinkButton from '../components/LinkButton'
import MainButton from '../components/MainButton'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field'

function select(state) {
  return {
    tokens: state.tokens,
    userInfo: state.userInfo
  }
}

const fetchLogin = (logdata, navigation, value, setCorrect, url) => {
  const email = logdata.email
  const user = { email: email, password: value }
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log('Error')
        setCorrect('false')
      } else {
        DB.createToken(data.authenticity_token, data.device_token)
        if (logdata.reg) {
          navigation.navigate('Base')
        } else {
          console.log(data.device_token)
          navigation.navigate('App')
        }
      }
    })
}

const renderMainButton = (navigation, value, data, tokens, setCorrect, url) => {
  return value.length == 4 ? (
    <MainButton
      title="Далее"
      className="active"
      onPress={() => fetchLogin(data, navigation, value, setCorrect, url)}
    />
  ) : (
    <MainButton title="Далее" />
  )
}

const renderMes = (cor) => {
  if (!cor) {
    return <Text style={styles.link}>Некорректный код</Text>
  }
}

const getNewPassword = (url, email) => {
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Response from the server', data)
      return data
    })
}

const EmailVerificationScreen = (props) => {
  const [value, setValue] = useState('')
  const [correct, setCorrect] = useState('true')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [pr, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  })

  const tokens = props.navigation.getParam('tokens')
  const new_password_link = props.navigation.getParam('get_password_url')
  const login_link = props.navigation.getParam('login_link')
  const data = props.navigation.getParam('data')
  const email = props.navigation.getParam('email')

  const CELL_COUNT = 4

  return (
    <View style={styles.mainWrapperFlex}>
      <View></View>
      <View style={styles.centredContainer}>
        <Text style={styles.h1InVerification}>
          Мы отправили код на твою корпоративную почту
        </Text>
        {renderMes(correct)}
        <CodeField
          ref={ref}
          {...pr}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          onPress={() => getNewPassword(new_password_link, email)}
          style={styles.sendAgainContainer}
        >
          <Text style={styles.link}>Отправить код еще раз</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logInButtonContainer}>
        {renderMainButton(
          props.navigation,
          value,
          data,
          tokens,
          setCorrect,
          login_link
        )}
      </View>
    </View>
  )
}

EmailVerificationScreen.navigationOptions = ({ navigation }) => ({
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

export default EmailVerificationScreen
