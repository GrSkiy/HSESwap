import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchData, linkForGetCityData } from '../store/actions/api'

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWhithoutFeedback
} from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

import { MaterialIcons } from '@expo/vector-icons'
import FullInfoInput from '../components/FullInfoInput'
import Line from '../components/Line'
import BackArrow from '../../assets/svg/backArrow.svg'
import LargeInput from '../components/LargeInput'
import LargeSelect from '../components/LargeSelect'
import MediumSelect from '../components/MediumSelect'
import SelectNew from '../components/SelectNew'
import SelectToggleButton from '../components/SelectToggleButton'

function select(state) {
  return {
    tokens: state.tokens,
    user: state.userInfo,
    pageData: state.data_from_api
  }
}

class Setting_view extends React.Component {
  constructor(props) {
    super(props)

    // let currentYear = this.props.user.year
    //
    // if (currentYear == 1) {
    //   currentYear = '1-й курс 2020 год поступления'
    // } else if (currentYear == 2) {
    //   currentYear = '2-й курс 2019 год поступления'
    // } else if (currentYear == 3) {
    //   currentYear = '3-й курс 2018 год поступления'
    // }
    console.log('______2_____________')
    console.log(this.props.user)
    console.log('___________1________')

    this.state = {
      loading: true,
      currentYear: this.props.user.year,
      selectType: null,
      currentCity: this.props.user.city,
      userName: null
    }
  }

  componentDidMount() {
    this.props.linkForGetCityData()
  }

  componentDidUpdate() {
    const { url } = this.props.pageData
    if (this.state.loading) {
      if (url.search('cities') != -1) {
        this.props.fetchData(url).then(() =>
          this.setState({
            loading: false,
            courseSelectIsOpened: this.state.courseSelectIsOpened,
            smallSelectOptionsList: this.state.smallSelectOptionsList,
            currentSmallSelectId: this.state.currentSmallSelectId
          })
        )
      }
    }
  }

  handleChange = (itemId, minorId, field) => {
    let newState = Object.assign({}, this.state)
    newState.minor_id = minorId
    this.props.updateRegUserInfo(newState)
    this.setState(newState)
  }

  openSelect = (selectType) => {
    this.setState({
      selectType: selectType
    })
  }

  selectClosureTap = () => {
    if (this.state.courseSelectIsOpened) {
      this.calcSelectOptions([
        '1-й курс 2020 год поступления',
        '2-й курс 2019 год поступления',
        '3-й курс 2018 год поступления'
      ])
    }
  }

  handleSelect = (type, value) => {
    console.log(value)
    if (type == 'year') {
      this.setState({
        currentYear: value + 1
      })
    } else if (type == 'city') {
      if (value == 0) {
        this.setState({
          currentCity: 'Москва'
        })
      } else if (value == 1) {
        this.setState({
          currentCity: 'Санкт-Петербург'
        })
      } else if (value == 2) {
        this.setState({
          currentCity: 'Нижний Новгород'
        })
      } else if (value == 3) {
        this.setState({
          currentCity: 'Пермь'
        })
      }
    }

    this.setState({
      selectType: null
    })
  }

  changePage = () => {
    console.log('1')
  }

  setName = (text) => {
    this.setState({
      userName: text
    })
  }

  confirmation = (navigation, isOpen) => {
    let data = this.state
    data = { action: 'registraion', update_data: data, isOpen: isOpen }
    console.log(this.props.data_from_api.url)

    console.log(data)

    fetch(this.props.data_from_api.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
      .then((response) => response.json())
      .then(() => {
        navigation.navigate('App')
      })
    // this.changeProfile(data)
  }

  render() {
    let course = this.props.user.year
    const courses = [
      '1-й (2020 год поступления)',
      '2-й (2019 год поступления)',
      '3-й (2018 год поступления)'
    ]

    const cities = ['Москва', 'Санкт-Петербург', 'Нижний Новгород', 'Пермь']

    return this.state.loading ? (
      <Text>Грузится</Text>
    ) : (
      <TouchableOpacity
        zIndex={-1}
        activeOpacity={1}
        onPress={() => this.handleSelect()}
        style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}
      >
        <Text style={{ fontSize: 16, fontWeight: '600' }}>
          Общая информация
        </Text>
        <Text style={{ fontSize: 12, marginTop: 12, color: '#979797' }}>
          Твой курс и кампус должны совпадать с реальными. Твое уникальное имя
          мы сгенерировали, можешь его поменять.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20
          }}
        >
          <SelectNew
            title={'Курс'}
            className={'small'}
            current={this.state.currentYear}
            options={courses}
            handleSelect={this.handleSelect}
            selectType={'year'}
            currentSelectType={this.state.selectType}
            handleOpenSelect={this.openSelect}
          />
          <SelectNew
            title={'Кампус'}
            className={'medium'}
            current={this.state.currentCity}
            options={cities}
            handleSelect={this.handleSelect}
            selectType={'city'}
            currentSelectType={this.state.selectType}
            handleOpenSelect={this.openSelect}
          />
        </View>
        <View style={{ marginTop: 20, zIndex: -5 }}>
          <LargeInput
            placeholderColor={'#000'}
            placeholder={'Ворона любви'}
            lableText="Имя"
            setText={() => this.setName('v')}
          />
        </View>
        <View style={{ marginTop: 32, zIndex: -20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Твой майнор</Text>
          <Text style={{ fontSize: 12, marginTop: 12, color: '#979797' }}>
            Выбранный майнор должен совпадать с реальными. Таким образом тебе
            будут отправлять запрос на обмен.
          </Text>
        </View>
        <View style={{ marginTop: 20, zIndex: -20 }}>
          <SelectNew
            title={'Твой майнор'}
            className={'large'}
            current={this.props.user.minor}
            options={[]}
            handleSelect={() => this.changePage()}
            selectType={'city'}
            currentSelectType={this.state.selectType}
            handleOpenSelect={() => this.changePage()}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

Setting_view.navigationOptions = ({ navigation }) => ({
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
      fetchData,
      linkForGetCityData
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
