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

import { MaterialIcons } from '@expo/vector-icons'
import FullInfoInput from '../components/FullInfoInput'
import Line from '../components/Line'

function select(state) {
  return {
    tokens: state.tokens,
    user: state.userInfo
  }
}

class Setting_view extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   data: this.props.navigation.getParam('data')
    // }
  }

  render() {
    return (
      <View style={styles.itemsBody}>
        <View style={styles.itemsCollection}>
          <FullInfoInput
            title={'Почта HSE'}
            content={'vsinsafutdinova@edu.hse.ru'}
          />
          <FullInfoInput title={'Мой кампус'} content={this.props.user.city} />
          <FullInfoInput title={'Мой майнор'} content={this.props.user.minor} />
        </View>
        <Text style={styles.caption}>
          Ты можешь поменять информацию о себе, если при регистрации допустил
          ошибку. Все изменения будут сохранены.
        </Text>
      </View>
    )
  }
}

Setting_view.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Личные настройки',
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.goBack(null)}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#0488FF" />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={'pencil'}
        // onPress={() =>
        //   navigation.push('EditPersonData', {
        //     data: navigation.getParam('data')
        //   })
        // }
      />
    </HeaderButtons>
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

export default connect(select, mapDispatchToProps)(Setting_view)

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
