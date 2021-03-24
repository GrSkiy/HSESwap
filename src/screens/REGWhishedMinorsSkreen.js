import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import MainButton from '../components/MainButton'
import Select from '../components/Select'

export default function YourWishedMinorsSkreen(props) {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.screenWithButtonOnBottom}>
        <View>
          <Text style={styles.h2}>Выбери майноры, которые тебе нравятся</Text>
          <Text style={styles.span}>
            Мы выберем из нашей базы самые подходящие для тебя предложения,
            список можно будет отредактировать в любой момент
          </Text>
          <View style={styles.selectWrapper}>
            <Select
              label="Желаемые майноры для перевода"
              items={[
                { name: 2, value: 2 },
                { name: 3, value: 3 }
              ]}
              current={2}
              field="year"
              character="three"
              // handleChange={this.handleChange}
            />
          </View>
        </View>
        <View>
          <MainButton
            title="Далее"
            onPress={() => props.navigation.navigate('Publishing')}
          />
          <Text style={styles.span}>Пропустить</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

YourWishedMinorsSkreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Настройка предолжений',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Publishing')}>
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  )
})
