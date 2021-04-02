import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import MainButton from '../components/MainButton'

export default function PublishingSkreen(props) {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.screenWithButtonOnBottom}>
        <View></View>
        <View>
          <View>
            <Text style={styles.h1Log}>Опубликуй своё объявление</Text>
            <Text style={styles.paragraphLog}>
              Используя указанные тобой данные, мы создадим объявление, которое
              будет отображаться у других студентов. Ты можешь опубликовать его
              и тогда тебе будут приходить уведомления о смене майнора.
            </Text>
            <Text style={styles.link}>
              Не опубликовав свое объявление, ты не сможешь обмениваться
              майнорами.
            </Text>
          </View>
        </View>
        <View style={styles.centredContainer}>
          <MainButton
            title="Открыть объявление"
            onPress={() => props.navigation.navigate('Main')}
          />
          <Text style={styles.link}>Сделть это позже</Text>
          <View style={styles.zBorder}></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

PublishingSkreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Публикация объявления',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  )
})
