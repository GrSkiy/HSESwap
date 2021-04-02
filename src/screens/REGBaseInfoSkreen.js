import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/main'
import { MaterialIcons } from '@expo/vector-icons'

import MainButton from '../components/MainButton'
import LargeInput from '../components/LargeInput'
import Select from '../components/Select'

class BaseInfoSkreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      year: 2,
      city_id: 1,
      name: ''
    }
  }

  changeName = (name) => {
    let newState = Object.assign({}, this.state)
    newState.name = name
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
    this.props.navigation.navigate('YourMinor', {
      city_id: this.state.city_id
    })
  }

  render() {
    const { year, city_id } = this.state
    return (
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.screenWithButtonOnBottom}>
          <View></View>
          <View>
            <Text style={styles.h2}>Подтверди базовую информацию</Text>
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
          <MainButton title="Далее" onPress={this.handleSubmit} />
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

export default BaseInfoSkreen
