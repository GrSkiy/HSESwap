import React, { useState, Fragment } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromAllMinors, fetchData } from '../store/actions/api'

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
  SafeAreaView
} from 'react-native'

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

const login = (data, value) => {
  const url = 'http://95.165.28.240:3000/api/v1/login'
  const email = data.email
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ type: 'verification', email: email, code: value })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Response from the server', data)
    })
}

const handleClick = (data, navigation, value) => {
  login(data, value)
  // navigation.navigate('GuestMain')
}

const renderMainButton = (navigation, value, data) => {
  return value.length == 4 ? (
    <MainButton
      title="Далее"
      className="active"
      onPress={() => handleClick(data, navigation, value)}
    />
  ) : (
    <MainButton title="Далее" />
  )
}

const EmailVerificationScreen = (props) => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [pr, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  })

  const data = props.navigation.getParam('data')

  const CELL_COUNT = 4

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.screenWithButtonOnBottom}>
        <View></View>
        <View style={styles.centredContainer}>
          <Text style={styles.h1InVerification}>
            Мы отправили код на твою корпоративную почту
          </Text>
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
            onPress={() =>
              console.log('отправка на сервер запроса еще раз выслать код')
            }
            style={styles.sendAgainContainer}
          >
            <Text style={styles.link}>Отправить код еще раз</Text>
          </TouchableOpacity>
        </View>
        {renderMainButton(props.navigation, value, data)}
      </View>
    </SafeAreaView>
  )
}

EmailVerificationScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Вход'
})

export default EmailVerificationScreen
