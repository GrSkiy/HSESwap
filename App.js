import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import FiltersScreen from "./src/screens/FiltersScreen";
import { AppLoading } from "expo";
import LogInScreen from "./src/screens/LogInScreen";
import MinorScreen from "./src/screens/MinorScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ExchangeDescriptionScreen from "./src/screens/ExchangeDescriptionScreen";
import EmailVerificationScreen from "./src/screens/EmailVerificationScreen";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <EmailVerificationScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
  },
});

export default App;
