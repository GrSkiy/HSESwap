import React, { useState, Fragment } from 'react'
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

const getdata = async () => {
  const url = 'http://localhost:3000/api/v1/login'
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

const EmailVerificationScreen = ({
  mainButtonHandle,
  handleSendAgain,
  navigation
}) => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  })

  getdata()

  const CELL_COUNT = 4

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeAreaContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>
            Мы отправили код на твою корпоративную почту
          </Text>
          <CodeField
            ref={ref}
            {...props}
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
            <Text style={styles.sendAgainTitle}>Отправить код еще раз</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainButton}>
        <MainButton title="Далее" onPress={() => navigation.navigate('Main')} />
      </View>
    </SafeAreaView>
  )
}

EmailVerificationScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Вход'
})

export default EmailVerificationScreen
