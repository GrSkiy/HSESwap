import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAuthToken } from '../store/actions/tokens'
import { updateFilters } from '../store/actions/filters'
import { updateExchangeMinors } from '../store/actions/exchangeMinors'

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Icon,
  View,
  Alert,
  Platform,
  Image
} from 'react-native'

import SmallNumberInput from '../components/SmallNumberInput'
import MainButton from '../components/MainButton'
import Constants from 'expo-constants'
import LargeSelect from '../components/LargeSelect'

import Select from '../components/Select'
import LargeInput from '../components/LargeInput'

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
      year: props.filters.year
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

  renderInputs = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.safeAreaContainer}>
          <View style={styles.filterMainContainer}>
            <View style={styles.filterSubContainer}>
              <View style={styles.viewContainer}>
                <View style={styles.myCourse}></View>
                <View style={styles.myBuilding}>
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
              </View>
            </View>

            <View style={styles.mainButton}>
              <MainButton title="Применить" onPress={this.handleSubmit} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  render() {
    return this.state.loading ? (
      <Text>Loading...</Text>
    ) : (
      <View style={styles.opacityLayer}>{this.renderInputs()}</View>
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

const styles = StyleSheet.create({
  opacityLayer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: '100%',
    justifyContent: 'flex-end'
  },
  safeAreaContainer: {
    backgroundColor: 'red',
    paddingLeft: 20,
    paddingRight: 20,
    // height: "100%",
    // display: "flex",
    // alignItems: "center",
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'ios' ? 80 : 44
  },

  viewContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 20
  },

  myCourse: {},
  pageTag: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  myBuilding: {
    marginLeft: 12,
    width: '90.3%'
  },

  homeIndicator: {
    width: 36,
    height: 4
  },

  imgContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },

  changeMinor: {
    marginBottom: Platform.OS === 'ios' ? 10 : 20
  },

  mainButton: {
    display: 'flex',
    alignItems: 'center'
  },
  filterMainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }
})
