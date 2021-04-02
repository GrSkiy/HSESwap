import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromAllMinors, fetchData } from '../store/actions/api'

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
    exchangeMinors: state.exchangeMinors.entities,
    data_from_api: state.data_from_api
  }
}

class YourWishedMinorsSkreen extends React.Component {
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
        this.props.fetchData(url, this.changeState)
      }
    }
  }

  changeState = (data) => {
    const newState = this.state
    newState.data = data
    newState.loading = false
    this.setState(newState)
  }

  addToWIshList = (id) => {
    let state = this.state
    state.wishList.push(id)

    this.setState(state)
  }

  renderMinors = () => {
    let minors = this.pushMinors()
    let minorsItems = []
    minors.forEach((minor, i) => {
      if (minor.status == 'normal') {
        minorsItems.push(
          <View key={'non_' + i}>
            <TouchableOpacity
              onPress={() => this.addToWIshList(minor.id)}
              style={styles.minorPoint}
            >
              <Text style={styles.minorTitle}>{minor.name}</Text>
            </TouchableOpacity>
            <Line />
          </View>
        )
      } else {
        console.log(minor)
        minorsItems.push(
          <View key={'non_' + i}>
            <TouchableOpacity
              onPress={() => this.addToWIshList(minor.id)}
              style={styles.minorPointActive}
            >
              <Text style={styles.minorTitle}>{minor.name}</Text>
            </TouchableOpacity>
            <Line />
          </View>
        )
      }
    })
    return minorsItems
  }

  pushMinors = () => {
    const { data } = this.state
    const city_id = this.props.navigation.getParam('city_id')

    let allMinors = []

    data[city_id].minors.forEach((minor, i) => {
      if (this.state.wishList.length > 0) {
        this.state.wishList.forEach((id, y) => {
          if (minor.id == id) {
            allMinors.push({ id: minor.id, name: minor.name, status: 'select' })
          } else {
            allMinors.push({ id: minor.id, name: minor.name, status: 'normal' })
          }
        })
      } else {
        allMinors.push({ id: minor.id, name: minor.name, status: 'normal' })
      }
    })

    let unUniqueIndex = []

    allMinors.forEach((minor, i) => {
      if (allMinors[i + 1]) {
        if (minor.name == allMinors[i + 1].name) {
          unUniqueIndex.push(i)
        }
      }
    })

    unUniqueIndex.forEach((id, i) => {
      allMinors.splice(id, 1)
    })

    return allMinors
  }

  render() {
    return this.state.loading ? (
      <Text>Loading.....</Text>
    ) : (
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
      linkFromAllMinors,
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(YourWishedMinorsSkreen)
