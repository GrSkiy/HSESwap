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

import Line from '../components/Line'

function select(state) {
  return {
    userInfo: state.userInfo,
    data_from_api: state.data_from_api
  }
}

class ChangeYourMinorScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      wishList: [],
      currentCity: this.props.navigation.getParam('city'),
      currentMinor: null,
      minor_id: props.userInfo.minor_id,
      city_id: props.userInfo.city_id,
      year: props.userInfo.year,
      minors: props.userInfo.minors
    }
  }

  componentDidMount() {
    this.props.linkFromAllMinors()
  }

  componentDidUpdate() {
    if (this.state.loading) {
      const { url } = this.props.data_from_api
      console.log(url)

      if (url.search('minors') != -1) {
        this.props.fetchData(url).then(() => this.setState({ loading: false }))
      }
    }
  }

  renderMinors = () => {
    const minors = this.props.data_from_api.pageData
    const { currentCity } = this.state
    // console.log('skadjasjdladjsd')
    // console.log(currentCity)
    // console.log('skadjasjdladjsd')
    // console.log(this.props.data_from_api)
    // console.log('skadjasjdladjsd')

    let minorsItems = []
    let minorsList = []

    minors.forEach((minor, i) => {
      if (minor.city == currentCity) {
        minorsList = minor.minors
      }
    })
    minorsList.forEach((minor, i) => {
      minorsItems.push(
        <View key={'non_' + i}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                currentMinor: { name: minor.name, id: minor.id }
              })
            }
            style={styles.minorPointActive}
          >
            <Text style={styles.minorTitle}>{minor.name}</Text>
          </TouchableOpacity>
        </View>
      )
    })
    return minorsItems
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  render() {
    // console.log('asdmalsmdlamdlasd')
    // console.log(this.props.data_from_api)
    // console.log('asdmalsmdlamdlasd')
    console.log(this.state.currentMinor)

    console.log('CONF', this.props.userInfo)
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

ChangeYourMinorScreen.navigationOptions = ({ navigation }) => ({
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
      onPress={() => navigation.goBack(null)}
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

export default connect(select, mapDispatchToProps)(ChangeYourMinorScreen)
