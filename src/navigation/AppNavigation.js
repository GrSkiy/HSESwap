import React from "react";
import { createAppContainer, ThemeColors } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "../screens/MainScreen";
import ExshangesForUserScreen from "../screens/ExshangesForUserScreen";
import MenuScreen from "../screens/MenuScreen";

import LogInScreen from "../screens/LogInScreen";
import SignInScreen from "../screens/SignInScreen";
import EmailVerificationScreen from "../screens/EmailVerificationScreen";

import FiltersScreen from "../screens/FiltersScreen";
import UsersExchangesScreens from "../screens/UsersExchangesScreens";
import ChatScreen from "../screens/ChatScreen";

import SettingsScreen from "../screens/SettingsScreen";
import Setting_myData_view from "../screens/Setting_myData_view";
import Setting_myData_change from "../screens/Setting_myData_change";
import AllMinorsScreen from "../screens/AllMinorsScreen";

import MinorScreen from "../screens/MinorScreen";
import ExchangeDescriptionScreen from "../screens/ExchangeDescriptionScreen";
import SuccessExchangeScreen from "../screens/SuccessExchangeScreen";
import SucsessExchangeDescriptionScreen from "../screens/SucsessExchangeDescriptionScreen";
import InformationOfExchangeScreen from "../screens/InformationOfExchangeScreen";

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#005aab",
    },
    headerTintColor: "#000",
  },
};

const MainStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Filters: {
      screen: FiltersScreen,
    },
  },
  {
    mode: "modal",
  }
);
// const ForUserMainStack = createStackNavigator(
//   {
//     ForUserMain: {
//       screen: MainScreen,
//     },
//     Filters: {
//       screen: FiltersScreen,
//     },
//   },
//   {
//     mode: "modal",
//   }
// );

const AllExchangesStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Profile: {
      screen: SettingsScreen,
    },
    PersonData: {
      screen: Setting_myData_view,
    },
    EditPersonData: {
      screen: Setting_myData_change,
    },
    AllMinors: {
      screen: AllMinorsScreen,
    },
    ExchangeCard: {
      screen: ExchangeDescriptionScreen,
    },
    SuccessExchange: {
      screen: SuccessExchangeScreen,
    },
    SucsessExchangeDescription: {
      screen: SucsessExchangeDescriptionScreen,
    },
    Information: {
      screen: InformationOfExchangeScreen,
    },
    Minor: {
      screen: MinorScreen,
    },
    login: {
      screen: LogInScreen,
    },
    EmailVerification: {
      screen: EmailVerificationScreen,
    },
  },
  { headerMode: "none" }
);

const ForUserStack = createStackNavigator({
  ForUser: {
    screen: MainScreen,
  },
  Profile: {
    screen: SettingsScreen,
  },
  PersonData: {
    screen: Setting_myData_view,
  },
  EditPersonData: {
    screen: Setting_myData_change,
  },
  AllMinors: {
    screen: AllMinorsScreen,
  },
  Filters: {
    screen: FiltersScreen,
  },
  ExchangeCard: {
    screen: ExchangeDescriptionScreen,
  },
  SuccessExchange: {
    screen: SuccessExchangeScreen,
  },
  SucsessExchangeDescription: {
    screen: SucsessExchangeDescriptionScreen,
  },
  Information: {
    screen: InformationOfExchangeScreen,
  },
  Minor: {
    screen: MinorScreen,
  },
  login: {
    screen: LogInScreen,
  },
  EmailVerification: {
    screen: EmailVerificationScreen,
  },
});

const UsersExchangesStack = createStackNavigator({
  UsersExchanges: {
    screen: UsersExchangesScreens,
    navigationOptions: {
      tabBarLabel: "Твои обмены (Чат)",
      tabBarIcon: (info) => (
        <Ionicons name="repeat" size={25} color={info.tintColor} />
      ),
    },
  },
  Chat: {
    screen: ChatScreen,
  },
});

const bottomTabsConfig = {
  Main: {
    screen: AllExchangesStack,
    navigationOptions: {
      tabBarLabel: "Объявления",
      tabBarIcon: (info) => (
        <Ionicons name="grid" size={25} color={info.tintColor} />
      ),
    },
  },
  ForUser: {
    screen: ForUserStack,
    navigationOptions: {
      tabBarLabel: "Для тебя",
      tabBarIcon: (info) => (
        <Ionicons name="home" size={25} color={info.tintColor} />
      ),
    },
  },
  UsersExchanges: {
    screen: UsersExchangesStack,
    navigationOptions: {
      tabBarLabel: "Твои обмены (Чат)",
      tabBarIcon: (info) => (
        <Ionicons name="repeat" size={25} color={info.tintColor} />
      ),
    },
  },
};

const BottomNavigator = createBottomTabNavigator(bottomTabsConfig, {
  activeTintColor: "#005aab",
  initialRouteName: "ForUser",
  shifting: true,
  barStyle: {
    backgroundColor: "#000",
  },
});

const AppNavigator = createStackNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      tabBarVisible: false,

      swipeEnabled: true,
    },
  },
  { headerMode: null }
);

const AppNavigation = createAppContainer(AppNavigator);

export { AppNavigation };
