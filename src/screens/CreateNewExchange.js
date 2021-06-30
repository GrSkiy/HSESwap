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
  TouchableOpacity,
  Switch
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
import ButtonSet from '../components/ButtonSet'

function select(state) {
  return {
    tokens: state.tokens,
    data_from_api: state.data_from_api,
    userInfo: state.userInfo
  }
}

class CreateNewExchange extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      switchIsEnabled: false
    }
  }

  handleChange = (itemId, minorId, field) => {
    let newState = Object.assign({}, this.state)
    newState.minor_id = minorId
    this.props.updateRegUserInfo(newState)
    this.setState(newState)
  }

  toggleSwitch = () => {
    let { switchIsEnabled } = this.state

    this.setState({
      switchIsEnabled: !switchIsEnabled
    })
  }

  handleUpdate = (whishedMinors) => {
    this.setState({
      whishedMinors: whishedMinors
    })
  }

  render() {
    let { switchIsEnabled } = this.state

    let isEnabled = true
    return (
      <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '500' }}>
            Твои желаемые майноры
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChangeYourWishedMinor')
            }
            style={{ marginTop: 0 }}
          >
            <Text style={{ marginTop: 2, fontSize: 14, color: '#0488FF' }}>
              Изменить
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 12, marginBottom: 22 }}>
          Ты можешь выбрать один или несколько майноров, на которые хочешь
          поменяться с другим студентом
        </Text>
        <ButtonSet wished_minors={this.props.userInfo.whishedMinors} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 32
          }}
        >
          <View style={{ width: 260 }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>
              Видимость твоего объявления
            </Text>
            <Text style={{ marginTop: 12, fontSize: 14 }}>
              Сейчас объявление будет видно другим пользователям
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 53,
              height: 34,
              borderColor: '#0488ff',
              borderRadius: 25
            }}
          >
            <Switch
              trackColor={{
                false: '#fff',
                true: 'rgba(4, 136, 255, 0.44)'
              }}
              thumbColor={'#0488ff'}
              ios_backgroundColor="#fff"
              onValueChange={() => this.toggleSwitch()}
              value={switchIsEnabled}
            />
          </View>
        </View>
      </View>
    )
  }
}

CreateNewExchange.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Общая информация',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.navigate('Main')}
    >
      <BackArrow />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity style={{ paddingRight: 20 }}>
      <Text style={{ color: '#0488ff', fontSize: 16 }}>Готово</Text>
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
