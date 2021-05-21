import React from 'react'

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import Line from '../components/Line'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api
  }
}

let CONFIRMATION_DATA = {}

class YourWishedMinorsSkreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wishList: [],
      minor_id: props.navigation.getParam('minor_id'),
      city_id: props.navigation.getParam('city_id'),
      year: props.navigation.getParam('year'),
      minors: props.navigation.getParam('minors')
    }
    CONFIRMATION_DATA = this.state
  }

  addToWIshList = (minor_id, id) => {
    let { minors } = this.state
    let newState = Object.assign({}, this.state)

    if (minors[id].status != 'pic') {
      minors[id].status = 'pic'
      newState.wishList.push(minor_id)
    } else {
      delete minors[id].status
      newState.wishList.find((element, index, array) => {
        if (element == minor_id) {
          newState.wishList.splice(index, 1)
        }
      })
    }
    newState.minors = minors
    this.setState(newState)
  }

  renderMinors = () => {
    let minors = this.state.minors
    let minorsItems = []
    minors.forEach((minor, i) => {
      if (i + 1 != this.state.minor_id) {
        if (minor.status == 'pic') {
          minorsItems.push(
            <View key={'non_' + i}>
              <TouchableOpacity
                onPress={() => this.addToWIshList(minor.value, i)}
                style={styles.minorPointActive}
              >
                <Text style={styles.minorTitle}>{minor.name}</Text>
              </TouchableOpacity>
              <Line />
            </View>
          )
        } else {
          minorsItems.push(
            <View key={'non_' + i}>
              <TouchableOpacity
                onPress={() => this.addToWIshList(minor.value, i)}
                style={styles.minorPoint}
              >
                <Text style={styles.minorTitle}>{minor.name}</Text>
              </TouchableOpacity>
              <Line />
            </View>
          )
        }
      } else {
        delete minors[i]
        CONFIRMATION_DATA.minor_id = minor.value
      }
    })
    return minorsItems
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  render() {
    console.log(CONFIRMATION_DATA)
    return (
      <SafeAreaView style={styles.mainWrapper}>
        <View>
          <Text style={styles.h2}>Выбери майноры, которые тебе нравятся</Text>
          <Text style={styles.span}>
            Ты можешь выбрать один или несколько майноров на которые хочешь
            перейти.
          </Text>
        </View>
        <ScrollView>{this.renderMinors()}</ScrollView>
      </SafeAreaView>
    )
  }
}

YourWishedMinorsSkreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Настройка предолжений',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      style={{ paddingRight: 20, color: '#005AAB' }}
      onPress={() =>
        navigation.navigate('Publishing', {
          city_id: CONFIRMATION_DATA.city_id,
          minor_id: CONFIRMATION_DATA.minor_id,
          wishList: CONFIRMATION_DATA.wishList,
          year: CONFIRMATION_DATA.year
        })
      }
    >
      <Text style={{ color: '#005AAB' }}>Готово</Text>
    </TouchableOpacity>
  )
})

export default YourWishedMinorsSkreen
