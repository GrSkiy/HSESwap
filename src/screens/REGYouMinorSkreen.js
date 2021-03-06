import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromAllMinors, fetchData } from '../store/actions/api'
import { updateRegUserInfo } from '../store/actions/user'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import MainButton from '../components/MainButton'
import Select from '../components/Select'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api,
    userInfo: state.userInfo
  }
}

class YouMinorSkreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      minor_id: 1,
      city_id: props.userInfo.city_id,
      year: props.userInfo.year
    }
  }

  componentDidMount() {
    this.props.linkFromAllMinors()
  }

  componentDidUpdate() {
    if (this.state.loading) {
      const { url } = this.props.data_from_api
      if (url.search('minors') != -1) {
        this.setState({ loading: false })
        this.props.fetchData(url)
      }
    }
  }

  handleChange = (itemId, minorId, field) => {
    let newState = Object.assign({}, this.state)
    newState.minor_id = minorId
    this.props.updateRegUserInfo(newState)
    this.setState(newState)
  }

  handleSubmit = () => {
    this.props.navigation.navigate('Whished')
  }

  renderSelect = (city) => {
    let allMinors = []

    if (city) {
      // console.log(city.minors)
      city.minors.forEach((minor, i) => {
        allMinors.push({ value: minor.id, name: minor.name })
      })
      if (!this.state.minors) {
        let newState = this.state
        newState.minors = allMinors
      }
      return (
        <Select
          label="Твой майнор"
          items={allMinors}
          current={this.props.userInfo.minor_id}
          field="minor"
          character="three"
          handleChange={this.handleChange}
        />
      )
    }
  }

  render() {
    const city = this.props.data_from_api.pageData[
      this.props.userInfo.city_id - 1
    ]
    const { loading } = this.state

    return loading && city != undefined ? (
      <Text>Loading.....</Text>
    ) : (
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.screenWithButtonOnBottom}>
          <View></View>
          <View>
            <Text style={styles.h2}>Укажи свой майнор</Text>
            <Text style={styles.span}>
              Это нужно для того, чтобы мы подабрали для тебя предложения об
              обмене на твой майнор
            </Text>
            <View style={styles.selectWrapper}>{this.renderSelect(city)}</View>
          </View>
          <MainButton
            title="Далее"
            className="active"
            onPress={this.handleSubmit}
          />
        </View>
      </SafeAreaView>
    )
  }
}

YouMinorSkreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Настройка умного поиска',
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
      linkFromAllMinors,
      fetchData,
      updateRegUserInfo
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(YouMinorSkreen)
