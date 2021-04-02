import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { linkFromUsersData, fetchData } from '../store/actions/api'

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'

import styles from '../stylesheets/main'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import SettingPoint from '../components/SettingPoint'
// import MainButton from '../components/MainButton'
import Line from '../components/Line'

function select(state) {
  return {
    tokens: state.tokens,
    exchangeMinors: state.exchangeMinors.entities,
    data_from_api: state.data_from_api
  }
}

class Burger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.linkFromUsersData()
  }

  componentDidUpdate() {
    if (this.state.loading) {
      const { url } = this.props.data_from_api
      if (url.search('profiles') != -1) {
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

  renderProfileData = (data) => {
    return (
      <View style={styles.settingBody}>
        <View>
          <Text>{data.first_name}</Text>
          <Text>{data.last_name}</Text>
          <Text>{data.minor}</Text>
          <Text>{data.year}</Text>
          <Text>{data.whished_minors}</Text>
          <SettingPoint
            title={'Открыть мое объявление'}
            toggle={data.isPublished}
          />
        </View>

        <View style={styles.settingBody}>
          <View style={styles.pointsCollection}>
            <SettingPoint
              title={'Мои данные'}
              changePage={() =>
                this.props.navigation.push('Settings', {
                  data: data
                })
              }
            />
            <SettingPoint
              title={'Список всех майноров'}
              changePage={() => this.props.navigation.push('AllMinors')}
            />
            <SettingPoint
              title={'Мои обмены'}
              changePage={() => this.props.navigation.push('UsersExchanges')}
            />
            <Line />
          </View>

          <View style={styles.logOut}>
            <Line />
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}
            >
              <Text style={styles.logOutTitle}>Выйти</Text>
            </TouchableOpacity>
            <Line />
          </View>
        </View>
      </View>
    )
  }

  render() {
    return this.state.loading ? (
      <Text>Loading...</Text>
    ) : (
      <View contentContainerStyle={styles.list}>
        {this.renderProfileData(this.state.data)}
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      linkFromUsersData,
      fetchData
    },
    dispatch
  )
}

export default connect(select, mapDispatchToProps)(Burger)
