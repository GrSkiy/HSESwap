import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAuthToken } from '../store/actions/tokens'
import { updateFilters } from '../store/actions/filters'
import { updateExchangeMinors } from '../store/actions/exchangeMinors'

import styles from '../stylesheets/main'

import { Modal, Text, SafeAreaView, View } from 'react-native'

import MainButton from '../components/MainButton'
import Select from '../components/Select'

// import SmallNumberInput from '../components/SmallNumberInput'
// import Constants from 'expo-constants'
// import LargeSelect from '../components/LargeSelect'
// import LargeInput from '../components/LargeInput'

function select(state) {
  return {
    tokens: state.tokens,
    filters: state.filters
  }
}

class FiltersScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: props.filters.city,
      year: props.filters.year,
      show: false
    }
  }

  // async componentDidMount() {
  //   // const url = 'http://localhost:3000/api/v1/filters?'
  //   // const response = await fetch(url)
  //   // const data = await response.json()
  //   // this.setState({ data: data, loading: false })
  //   this.setState({ loading: false })
  //   // console.log(this.state)
  // }

  handleChange = (id, name, field) => {
    let data = this.state

    console.log(id, name, field)

    if (field == 'year') {
      data.data.filters_data.year = parseInt(name)
    } else if (field == 'city') {
      data.data.filters_data.city_id = id + 1
      data.data.filters_data.city_name = name
    }

    this.setState(data)
  }

  handleSubmit = () => {
    const { cities, years } = this.props.filters
    const { deviceToken, authenticityToken } = this.props.tokens
    const url = `http://localhost:3000/api/v1/filters?device_token=${deviceToken}&authenticity_token=${authenticityToken}`
    const { city, year } = this.state

    const requestData = {
      filter: {
        city_id: city,
        year: year
      }
    }

    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Success:', responseData)

        this.props.updateAuthToken(responseData.tokens)
        this.props.updateExchangeMinors(responseData)

        this.props.updateFilters({
          city: city,
          year: year
        })
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    this.props.navigation.goBack()
  }

  show = () => {
    this.setState({ show: true })
  }
  close = () => {
    this.setState({ show: false })
  }

  renderInputs = () => {
    let { show } = this.state
    console.log('00000000000000000000')
    console.log(show)
    return (
      <View style={styles.filterMainContainer}>
        <Text>Фильтры</Text>
        <View>
          <Select
            label="Год обучения"
            items={[{ city_name: 2 }, { city_name: 3 }]}
            current={this.state.year}
            field="year"
            handleChange={this.handleChange}
          />
          <Select
            label="Кампус"
            items={this.props.filters.cities}
            current={this.state.city}
            field="city"
            handleChange={this.handleChange}
          />
        </View>

        <View style={styles.mainButton}>
          <MainButton title="Применить" onPress={this.handleSubmit} />
        </View>
      </View>
    )
  }

  render() {
    return this.state.loading ? (
      <Text>Loading...</Text>
    ) : (
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={false}
        onRequestClose={this.close}
        style={styles.popUpContainer}
      >
        {this.renderInputs()}
      </Modal>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { updateFilters, updateAuthToken, updateExchangeMinors },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(FiltersScreen)
