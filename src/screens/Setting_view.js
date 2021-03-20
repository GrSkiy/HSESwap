import { StatusBar } from 'expo-status-bar'
import React from 'react'
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

export default class Setting_view extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.navigation.getParam('data')
    }
  }

  render() {
    return (
      <View style={styles.itemsBody}>
        <View style={styles.itemsCollection}>
          <FullInfoInput
            title={'Фамилия'}
            content={this.state.data.last_name}
          />
          <FullInfoInput title={'Имя'} content={this.state.data.first_name} />
          <FullInfoInput
            title={'Отчество'}
            content={this.state.data.middle_name}
          />
          <FullInfoInput
            title={'Почта HSE'}
            content={'vsinsafutdinova@edu.hse.ru'}
          />
          <FullInfoInput title={'Мой кампус'} content={this.state.data.city} />
          <FullInfoInput title={'Мой майнор'} content={this.state.data.minor} />
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
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={'pencil'}
        onPress={() =>
          navigation.push('EditPersonData', {
            data: navigation.getParam('data')
          })
        }
      />
    </HeaderButtons>
  )
})

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
