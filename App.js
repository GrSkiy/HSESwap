import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { AppLoading } from "expo";

import LogInScreen from "./src/screens/LogInScreen";
import MinorScreen from "./src/screens/MinorScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ExchangeDescriptionScreen from "./src/screens/ExchangeDescriptionScreen";
import EmailVerificationScreen from "./src/screens/EmailVerificationScreen";
import FiltersScreen from "./src/screens/FiltersScreen";
import MainScreen from "./src/screens/MainScreen";
import MenuScreen from "./src/screens/MenuScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import AllMinorsScreen from "./src/screens/AllMinorsScreen";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.mainContainer}>
        <MainScreen />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
  },
});

export default App;
