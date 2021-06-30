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
import { linkFromAllMinors } from '../store/actions/api'
import { fetchData } from '../store/actions/api'
import store from '../store/index.js'

import Line from '../components/Line'

function select(state) {
  return {
    userInfo: state.userInfo,
    data_from_api: state.data_from_api
  }
}

class ChangeYourWishedMinors extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      wishList: []
    }
  }

  componentDidMount() {
    this.props.linkFromAllMinors()
  }

  componentDidUpdate() {
    if (this.state.loading) {
      const { url } = this.props.data_from_api

      if (url.search('minors') != -1) {
        this.props.fetchData(url).then(() => this.setState({ loading: false }))
      }
    }
  }

  addToWIshList = (minor_id, id, minors) => {
    let { wishList } = this.state
    let { userInfo } = this.props

    if (minors[id].status != 'pic') {
      console.log(wishList)
      minors[id].status = 'pic'
      wishList.push(minor_id)
      console.log(wishList)
    } else {
      delete minors[id].status
      wishList = wishList.splice(id - 1, 1)
    }

    console.log(wishList)
    console.log('sdffjfdjndjnavjnvdjfdgfvfgfgj')
    console.log(id)
    userInfo.whishedMinors = wishList
    console.log(userInfo)
    // newState.minors = minors
    this.props.updateRegUserInfo(userInfo)
    this.setState({ wishList: wishList })
  }

  renderMinors = () => {
    const minors = this.props.data_from_api.pageData
    const { currentCity } = this.state

    let minorsItems = []
    let minorsList = []

    minors.forEach((minor, i) => {
      if (minor.city == this.props.userInfo.city) {
        minorsList = minor.minors
      }
    })
    minorsList.forEach((minor, i) => {
      if (minor.id != this.props.userInfo.exchangeMinorId) {
        if (minor.status == 'pic') {
          if (i == 0) {
            minorsItems.push(
              <View key={'non_' + i}>
                <TouchableOpacity
                  onPress={() => this.addToWIshList(minor.id, i, minorsList)}
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
                  onPress={() => this.addToWIshList(minor.id, i, minorsList)}
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
                  onPress={() => this.addToWIshList(minor.id, i, minorsList)}
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
                  onPress={() => this.addToWIshList(minor.id, i, minorsList)}
                  style={styles.minorPoint}
                >
                  <Text style={styles.minorTitle}>{minor.name}</Text>
                </TouchableOpacity>
              </View>
            )
          }
        }
      }
    })
    return minorsItems
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  render() {
    console.log(this.props.userInfo)

    return !this.state.loading ? (
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
    ) : (
      <Text>Text</Text>
    )
  }
}

const handleUpdate = () => {
  var newState = store.getState()
  console.log(newState.userInfo)
}

store.subscribe(handleUpdate)

ChangeYourWishedMinors.navigationOptions = ({ navigation }) => ({
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
      onPress={() => handleUpdate()}
    >
      <Text style={{ color: '#005AAB' }}>Готово</Text>
    </TouchableOpacity>
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateRegUserInfo,
      fetchData,
      linkFromAllMinors
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(ChangeYourWishedMinors)
