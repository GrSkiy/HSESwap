import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeProfile } from '../store/actions/api'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import MainButton from '../components/MainButton'
import LinkButton from '../components/LinkButton'

import DB from '../db'

function select(state) {
  return {
    tokens: state.tokens
  }
}

function PublishingSkreen(props) {
  const data = {
    city_id: props.navigation.getParam('city_id'),
    minor_id: props.navigation.getParam('minor_id'),
    year: props.navigation.getParam('year'),
    wishList: props.navigation.getParam('wishList')
  }
  console.log(data)
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
            className="active"
            onPress={() =>
              confirmation(props.tokens, props.navigation, data, true)
            }
          />
          <LinkButton
            handleClick={() =>
              confirmation(props.tokens, props.navigation, data, false)
            }
            title="Сделть это позже"
          />
          <View style={styles.zBorder}></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const confirmation = async (tokens, navigation, data, isOpen) => {
  data.isOpen = isOpen
  data = { action: 'update', update_data: data }
  DB.getToken((result) => {
    console.log(data)

    fetch(
      'http://95.165.28.240:3000/api/v1/profiles?authenticity_token=' +
        result.authenticity_token +
        '&device_token=' +
        result.device_token,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      }
    )
      .then((response) => response.json())
      .then(() => {
        navigation.navigate('App')
      })
  })

  // changeProfile(data)
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeProfile
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(PublishingSkreen)
