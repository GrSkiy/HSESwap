import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import Modal from 'react-native-modal'

import styles from '../stylesheets/main'

import SettingPoint from '../components/SettingPoint'
// import MainButton from '../components/MainButton'
import Line from '../components/Line'
import NotificationBanner from '../components/NotificationBanner'
import ArchivedCard from '../components/ArchivedCard'

export default class Burger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  renderCards = () => {
    const { archivedMinors } = this.props
    let cardItems = []

    archivedMinors.exchangeMinors.forEach((minor, i) => {
      const { city, year, address, credits, whishedMinors, url } = minor

      cardItems.push(
        <ArchivedCard
          city={city}
          year={year}
          title={minor.minor}
          address={address}
          credits={credits}
          wiched_minors={whishedMinors}
          key={i}
        />
      )
    })

    return cardItems
  }

  componentDidMount() {
    console.log('///////////Burger - mounted')
    console.log(this.props.user)
  }

  show = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }

  changePage = (root) => {
    this.close()
    return this.props.navigation.navigate(root)
  }

  render() {
    const { user } = this.props
    let { show } = this.state

    const a = 'a'
    const b = 'b'
    const c = 'c'
    const d = 'd'

    return (
      <Modal
        isVisible={show}
        onSwipeComplete={() => this.close()}
        swipeDirection="down"
        backgroundColor="#fff"
        style={{
          margin: 0,
          marginTop: '20%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20
        }}
      >
        <ScrollView
          style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}
        >
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: '500' }}>
                Общая информация
              </Text>
              <TouchableOpacity
                onPress={() => this.changePage('Settings')}
                style={{ marginTop: 6 }}
              >
                <Text style={styles.linkReadMore}>Редактировать</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View style={{ width: '45%', marginTop: 20 }}>
                <View style={{}}>
                  <Text style={styles.h2}>Имя</Text>
                  <Text style={styles.chips}>Григорий Петрович</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.h2}>Твой майнор</Text>
                  <Text style={styles.chips}>{user.minor}</Text>
                </View>
              </View>
              <View style={{ width: '45%', marginTop: 20 }}>
                <View style={{}}>
                  <Text style={styles.h2}>Кампус</Text>
                  <Text style={styles.chips}>{this.city}</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.h2}>Курс</Text>
                  <Text style={styles.chips}>{this.year}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: '500' }}>
                Твое объявление
              </Text>
              <TouchableOpacity
                onPress={() => this.changePage('CreateNewExchange')}
                style={{ marginTop: 6 }}
              >
                <Text style={styles.linkReadMore}>Создать объявление</Text>
              </TouchableOpacity>
            </View>
            <NotificationBanner
              text={
                'Сейчас у тебя нет активного объявления, для обмена заполни недостоющую информацию'
              }
            />
          </View>
          <View
            style={{
              marginTop: 20
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: '500' }}>
              Архив объявлений
            </Text>
            <View>{}</View>
          </View>
          <TouchableOpacity onPress={() => this.props.logOut()}>
            <Text style={styles.logOutTitle}>Выйти</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    )
  }
}
