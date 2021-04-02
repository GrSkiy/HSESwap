import React, { useContext, useState } from 'react'
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

export default function LogInScreen({ mainButtonHandle, navigation }) {
  const [email, setEmail] = useState('')

  const login = async () => {
    await fetch(`http://127.0.0.1:3000/api/v1/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    return navigation.push('EmailVerification')
  }

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.screenWithButtonOnBottom}>
        <View style={styles.loginContainer}>
          <Text style={styles.h1}>Вход по почте HSE</Text>
          <View style={styles.liginPadding}></View>
          <LargeInput
            lableText="Корпоративная почта hse"
            placeholder="youe@edu.hse.ru"
            setText={setEmail}
          />
        </View>
        <MainButton title="Далее" onPress={login} />
      </View>
    </View>
  )
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
