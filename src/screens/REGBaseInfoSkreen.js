import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateRegUserInfo } from '../store/actions/user'

import MainButton from '../components/MainButton'
import LargeInput from '../components/LargeInput'
import Select from '../components/Select'

function select(state) {
  return {
    tokens: state.tokens,
    userInfo: state.userInfo
  }
}

class BaseInfoSkreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = { year: 2, city_id: 1 }
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
    this.props.updateRegUserInfo(newState)
  }

  handleSubmit = () => {
    console.log('SUBMIT')
    this.props.navigation.navigate('YourMinor')
  }

  render() {
    console.log(this.props.userInfo)
    const { year, city_id } = this.state
    return (
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.screenWithButtonOnBottom}>
          <View></View>
          <View>
            <Text style={styles.h2}>Заполни базовую информацию</Text>
            <Text style={styles.span}>
              Твой курс и кампус должны совпадать в реальными, имя можешь
              оставить в тайне
            </Text>
            <View style={styles.selectWrapper}>
              <Select
                label="Курс"
                items={[
                  { name: 2, value: 2 },
                  { name: 3, value: 3 }
                ]}
                current={year}
                field="year"
                character="one"
                handleChange={this.handleChange}
              />
              <Select
                label="Кампус"
                items={[
                  { name: 'Москва', value: 1 },
                  { name: 'Санкт-Петербург', value: 2 },
                  { name: 'Нижний-Новгород', value: 3 },
                  { name: 'Пермь', value: 4 }
                ]}
                current={city_id}
                field="city"
                character="two"
                handleChange={this.handleChange}
              />
            </View>
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
// <LargeInput
//   lableText="Имя"
//   placeholder="Можешь указать ник"
//   setText={this.changeName}
// />

BaseInfoSkreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Общая информация',
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
      updateRegUserInfo
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(BaseInfoSkreen)
