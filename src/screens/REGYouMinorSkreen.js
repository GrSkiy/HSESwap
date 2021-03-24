import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromAllMinors, fetchData } from '../store/actions/api'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import MainButton from '../components/MainButton'
import Select from '../components/Select'

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities,
    data_from_api: state.data_from_api
  }
}

class YouMinorSkreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      minor_id: 1
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

  handleChange = (id, name, field) => {
    let newState = Object.assign({}, this.state)

    if (field == 'year') {
      newState.year = parseInt(name)
    } else if (field == 'city') {
      newState.city_id = id + 1
      // newState.city.name = name
    }
    this.setState(newState)
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.navigation.navigate('Whished')
  }

  getMinorsList = () => {
    const { data } = this.state

    let allMinors = []
    data.forEach((sity_minors, i) => {
      sity_minors.minors.forEach((minor, y) => {
        allMinors.push({ value: minor.id, name: minor.name })
      })
    })
    return allMinors
  }

  render() {
    const { loading, data } = this.state

    return loading ? (
      <Text>Loading.....</Text>
    ) : (
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.screenWithButtonOnBottom}>
          <View>
            <Text style={styles.h2}>Укажи свой майнор</Text>
            <Text style={styles.span}>
              Это нужно для того, чтобы мы подабрали для тебя предложения об
              обмене на твой майнор
            </Text>
            <View style={styles.selectWrapper}>
              <Select
                label="Твой майнор"
                items={this.getMinorsList()}
                current={2}
                field="year"
                character="three"
                handleChange={this.handleChange}
              />
            </View>
          </View>
          <MainButton title="Далее" onPress={this.handleSubmit} />
        </View>
      </SafeAreaView>
    )
  }
}

YouMinorSkreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Настройка умного поиска',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Whished')}>
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
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

export default connect(select, mapDispatchToProps)(YouMinorSkreen)
