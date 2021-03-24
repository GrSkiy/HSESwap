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
          <View style={styles.sentredWrepper}>
            <Text style={styles.h1}>Опубликуй своё объявление</Text>
            <Text style={styles.span}>
              По твоим данным мы можем создать объявление, которое может
              отображаться у других студентов, которые хотят перевестись на твой
              майнор.
            </Text>
          </View>
          <MainButton
            title="Открыть объявление"
            onPress={() => props.navigation.navigate('Main')}
          />
          <Text style={styles.span}>Пропустить</Text>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  )
}

PublishingSkreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Публикация объявления',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Container')}>
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  )
})
