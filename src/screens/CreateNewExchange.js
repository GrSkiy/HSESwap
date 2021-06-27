import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchData } from '../store/actions/api'

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import FullInfoInput from '../components/FullInfoInput'
import Line from '../components/Line'
import BackArrow from '../../assets/svg/backArrow.svg'
import LargeInput from '../components/LargeInput'
import LargeSelect from '../components/LargeSelect'
import MediumSelect from '../components/MediumSelect'
import Select from '../components/Select'

function select(state) {
  return {
    tokens: state.tokens,
    user: state.userInfo
  }
}

class CreateNewExchange extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   data: this.props.navigation.getParam('data')
    // }
  }

  handleChange = (itemId, minorId, field) => {
    let newState = Object.assign({}, this.state)
    newState.minor_id = minorId
    this.props.updateRegUserInfo(newState)
    this.setState(newState)
  }

  render() {
    let allMinors = ['a', 'b', ' c', 'd']
    return (
      <View>
        <Text>Общая информация</Text>
        <Text>
          Твой курс и кампус должны совпадать с реальными. Твое уникальное имя
          мы сгенерируем самостоятельно.
        </Text>

        <LargeInput />
        <LargeSelect />
        <MediumSelect />
      </View>
    )
  }
}

CreateNewExchange.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Общая информация',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack(null)}
    >
      <BackArrow />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity>
      <Text>Готово</Text>
    </TouchableOpacity>
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(CreateNewExchange)

const styles = StyleSheet.create({
  itemsBody: {
    width: '100%'
  },
  itemsCollection: {
    marginTop: 20
  },
  caption: {
    fontSize: 12,
    color: '#9D9D9D',
    marginTop: 20,
    marginLeft: 20,
    width: 320
  }
})
