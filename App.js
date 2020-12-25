import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import FiltersScreen from "./src/screens/FiltersScreen";
import { AppLoading } from "expo";

import LogInScreen from "./src/screens/LogInScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import Setting_myData_view from "./src/screens/Setting_myData_view";
import Setting_sosialNetworcs_view from "./src/screens/Setting_sosialNetworcs_view";
import Setting_sosialNetworcs_change from "./src/screens/Setting_sosialNetworcs_change";
import Setting_myData_change from "./src/screens/Setting_myData_change";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Setting_myData_change />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
  },
});

export default App;
