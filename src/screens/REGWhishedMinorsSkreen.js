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

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateRegUserInfo } from '../store/actions/user'

import Line from '../components/Line'

function select(state) {
  return {
    userInfo: state.userInfo
  }
}

class YourWishedMinorsSkreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wishList: [],
      minor_id: props.userInfo.minor_id,
      city_id: props.userInfo.city_id,
      year: props.userInfo.year,
      minors: props.userInfo.minors
    }
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
    this.props.updateRegUserInfo(newState)
    this.setState(newState)
  }

  renderMinors = () => {
    let minors = this.state.minors
    let minorsItems = []
    minors.forEach((minor, i) => {
      if (minor.value != this.props.userInfo.minor_id) {
        if (minor.status == 'pic') {
          if (i == 0) {
            minorsItems.push(
              <View key={'non_' + i}>
                <TouchableOpacity
                  onPress={() => this.addToWIshList(minor.value, i)}
                  style={styles.minorPointActive}
                >
                  <Text style={styles.minorTitle}>{minor.name}</Text>
                </TouchableOpacity>
              </View>
            )
          } else {
            minorsItems.push(
              <View key={'non_' + i}>
                <Line />
                <TouchableOpacity
                  onPress={() => this.addToWIshList(minor.value, i)}
                  style={styles.minorPointActive}
                >
                  <Text style={styles.minorTitle}>{minor.name}</Text>
                </TouchableOpacity>
              </View>
            )
          }
        } else {
          if (i == 0) {
            minorsItems.push(
              <View key={'non_' + i}>
                <TouchableOpacity
                  onPress={() => this.addToWIshList(minor.value, i)}
                  style={styles.minorPoint}
                >
                  <Text style={styles.minorTitle}>{minor.name}</Text>
                </TouchableOpacity>
              </View>
            )
          } else {
            minorsItems.push(
              <View key={'non_' + i}>
                <Line />
                <TouchableOpacity
                  onPress={() => this.addToWIshList(minor.value, i)}
                  style={styles.minorPoint}
                >
                  <Text style={styles.minorTitle}>{minor.name}</Text>
                </TouchableOpacity>
              </View>
            )
          }
        }
      } else {
        delete minors[i]
      }
    })
    return minorsItems
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  render() {
    console.log('CONF', this.props.userInfo)
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
      onPress={() => navigation.navigate('Publishing')}
    >
      <Text style={{ color: '#005AAB' }}>Готово</Text>
    </TouchableOpacity>
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateRegUserInfo
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(YourWishedMinorsSkreen)
