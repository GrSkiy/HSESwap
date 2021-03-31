import React from 'react'
import { createAppContainer, ThemeColors } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Platform, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import AppContainer from '../../AppContainer'

import MainScreen from '../screens/MainScreen'
import MainForGuestScreen from '../screens/MainForGuestScreen'
import ExshangesForUserScreen from '../screens/ExshangesForUserScreen'

import LogInScreen from '../screens/LogInScreen'
import EmailVerificationScreen from '../screens/EmailVerificationScreen'
import BaseInfoSkreen from '../screens/REGBaseInfoSkreen'
import YouMinorSkreen from '../screens/REGYouMinorSkreen'
import YourWishedMinorsSkreen from '../screens/REGWhishedMinorsSkreen'
import PublishingSkreen from '../screens/REGPublishedSkreen'

// import FiltersScreen from '../screens/FiltersScreen'
import UsersExchangesScreens from '../screens/UsersExchangesScreens'
import ChatScreen from '../screens/ChatScreen'

import Burger from '../screens/Burger'
import Setting_view from '../screens/Setting_view'
import Setting_change from '../screens/Setting_change'
import AllMinorsScreen from '../screens/AllMinorsScreen'

import MinorScreen from '../screens/MinorScreen'
import ExchangeDescriptionScreen from '../screens/ExchangeDescriptionScreen'
import SuccessExchangeScreen from '../screens/SuccessExchangeScreen'
import SucsessExchangeDescriptionScreen from '../screens/SucsessExchangeDescriptionScreen'
import InformationOfExchangeScreen from '../screens/InformationOfExchangeScreen'

const navigatorOptions = {
  defaultNavigationOptions: {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#FAFAFA'
    },
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: '700'
    }
  }
}

const MainForUserStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen
    }
  },
  navigatorOptions
)

const MainForGuestStack = createStackNavigator(
  {
    MainForGuest: {
      screen: MainForGuestScreen
    }
  },
  navigatorOptions
)

const LogInStack = createStackNavigator(
  {
    login: {
      screen: LogInScreen
    },
    EmailVerification: {
      screen: EmailVerificationScreen
    },
    Base: {
      screen: BaseInfoSkreen
    },
    YourMinor: {
      screen: YouMinorSkreen
    },
    Whished: {
      screen: YourWishedMinorsSkreen
    },
    Publishing: {
      screen: PublishingSkreen
    }
  },
  navigatorOptions
)

const SettinsStack = createStackNavigator(
  {
    PersonData: {
      screen: Setting_view
    },
    EditPersonData: {
      screen: Setting_change
    }
  },
  navigatorOptions
)

const UsersExchangesStack = createStackNavigator(
  {
    UsersExchanges: {
      screen: UsersExchangesScreens
    },
    Chat: {
      screen: ChatScreen
    }
  },
  navigatorOptions
  // { bottomTabsMode: 'none' }
)

const AllMinorsStack = createStackNavigator(
  {
    AllMinors: {
      screen: AllMinorsScreen
    }
  },
  navigatorOptions
)

const ForUserStack = createStackNavigator(
  {
    ForUserMain: {
      screen: MainScreen
    }
  },
  navigatorOptions
)

const ExchangeCardStack = createStackNavigator(
  {
    ExchangeCard: {
      screen: ExchangeDescriptionScreen
    }
  },
  navigatorOptions
)

const AllExchangesStack = createStackNavigator(
  {
    Main: {
      screen: MainForUserStack
    },
    Chat: {
      screen: UsersExchangesStack
    },
    Profile: {
      screen: Burger
    },
    Settings: {
      screen: SettinsStack
    },
    AllMinors: {
      screen: AllMinorsStack
    },
    ExchangeCard: {
      screen: ExchangeCardStack
    },
    SuccessExchange: {
      screen: SuccessExchangeScreen
    },
    SucsessExchangeDescription: {
      screen: SucsessExchangeDescriptionScreen
    },
    Information: {
      screen: InformationOfExchangeScreen
    },
    Minor: {
      screen: MinorScreen
    },
    login: {
      screen: LogInStack
    }
  },
  { headerMode: 'none' }
)

const ForUserMainStack = createStackNavigator(
  {
    ForUser: {
      screen: MainForUserStack
    },
    Chat: {
      screen: UsersExchangesStack
    },
    Profile: {
      screen: Burger
    },
    Settings: {
      screen: SettinsStack
    },
    ExchangeCard: {
      screen: ExchangeCardStack
    },
    SuccessExchange: {
      screen: SuccessExchangeScreen
    },
    SucsessExchangeDescription: {
      screen: SucsessExchangeDescriptionScreen
    },
    Information: {
      screen: InformationOfExchangeScreen
    },
    Minor: {
      screen: MinorScreen
    },
    login: {
      screen: LogInStack
    }
  },
  { headerMode: 'none' }
)

const bottomTabsConfig = {
  Main: {
    screen: AllExchangesStack,
    navigationOptions: {
      tabBarLabel: 'Объявления',
      tabBarIcon: (info) => (
        <Ionicons name="grid" size={25} color={info.tintColor} />
      )
    }
  },
  ForUser: {
    screen: ForUserMainStack,
    navigationOptions: {
      tabBarLabel: 'Для тебя',
      tabBarIcon: (info) => (
        <Ionicons name="home" size={25} color={info.tintColor} />
      )
    }
  }
}

const BottomNavigator = createBottomTabNavigator(bottomTabsConfig, {
  activeTintColor: '#005aab',
  initialRouteName: 'ForUser',
  shifting: true,
  barStyle: {
    backgroundColor: '#000'
  }
})

const UserMainStack = createStackNavigator(
  {
    // Tabs: {
    //   screen: BottomNavigator,
    //   tabBarVisible: false,
    //
    //   swipeEnabled: true
    // }
    AllExchanges: {
      screen: AllExchangesStack
    },
    ForUser: {
      screen: ForUserStack
    }
  },
  { headerMode: null }
)

const GuestMainStack = createStackNavigator(
  {
    GuestMain: {
      screen: MainForGuestStack
    },
    ExchangeCard: {
      screen: ExchangeCardStack
    },
    Login: {
      screen: LogInStack
    }
    // Container: {
    //   screen: AppContainerStack
    // }
  },
  { headerMode: null }
)

// const AppNavigator = createStackNavigator(
//   {
//     UserPart: {
//       screen: UserMainStack
//     },
//     GuestPart: {
//       screen: GuestMainStack
//     }
//   },
//   { headerMode: null }
// )
// const AppNavigation = createAppContainer(AppNavigator)

const UserNavigation = createAppContainer(UserMainStack)
const GuestNavigation = createAppContainer(GuestMainStack)

// export { AppNavigation }
export { UserNavigation, GuestNavigation }
