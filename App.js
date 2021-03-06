import React from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";
import { AppLoading } from "expo";
import { AppNavigation } from "./src/navigation/AppNavigation";

import LogInScreen from "./src/screens/LogInScreen";
import FiltersScreen from "./src/screens/FiltersScreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageId: 0,
    };
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
    backgroundColor: "#fff",
  },
});
