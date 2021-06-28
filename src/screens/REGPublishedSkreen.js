import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkForChengeProfileData } from '../store/actions/api'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import MainButton from '../components/MainButton'
import LinkButton from '../components/LinkButton'

import DB from '../db'

function select(state) {
  return {
    tokens: state.tokens,
    userInfo: state.userInfo,
    data_from_api: state.data_from_api
  }
}

class PublishingSkreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city_id: props.userInfo.city_id,
      minor_id: props.userInfo.minor_id,
      year: props.userInfo.year,
      wishList: props.userInfo.wishList
    }
  }

  componentDidMount() {
    DB.getToken((result) => {
      this.props.linkForChengeProfileData(result)
    })
  }

  confirmation = (navigation, isOpen) => {
    let data = this.state
    data = { action: 'registraion', update_data: data, isOpen: isOpen }
    console.log(this.props.data_from_api.url)

    console.log(data)

    fetch(this.props.data_from_api.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
      .then((response) => response.json())
      .then(() => {
        navigation.navigate('App')
      })
    // this.changeProfile(data)
  }

  render() {
    return (
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.screenWithButtonOnBottom}>
          <View></View>
          <View>
            <View>
              <Text style={styles.h1Log}>Опубликуй своё объявление</Text>
              <Text style={styles.paragraphLog}>
                Используя указанные тобой данные, мы создадим объявление,
                которое будет отображаться у других студентов. Ты можешь
                опубликовать его и тогда тебе будут приходить уведомления о
                смене майнора.
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
              onPress={() => this.confirmation(this.props.navigation, true)}
            />
            <LinkButton
              handleClick={() => confirmation(this.props.navigation, false)}
              title="Сделть это позже"
            />
            <View style={styles.zBorder}></View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
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
      linkForChengeProfileData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(PublishingSkreen)
