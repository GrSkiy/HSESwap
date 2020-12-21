import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";

import MainScreen from "./src/screens/MainScreen";
import MenuScreen from "./src/screens/MenuScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import AllMinorsScreen from "./src/screens/AllMinorsScreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualPageId: 0,
    };
  }

  changePage = (pageId) => {
    // changeActualPage(pageId);

    this.setState({ actualPageId: pageId });
  };

  render() {
    if (this.state.actualPageId === 0) {
      return (
        <SafeAreaView style={styles.mainContainer}>
          <MainScreen changePage={this.changePage} />
        </SafeAreaView>
      );
    } else if (this.state.actualPageId === 1) {
      return (
        <SafeAreaView style={styles.mainContainer}>
          <MenuScreen changePage={this.changePage} />
        </SafeAreaView>
      );
    } else if (this.state.actualPageId === 2) {
      return (
        <SafeAreaView style={styles.mainContainer}>
          <SettingsScreen changePage={this.changePage} />
        </SafeAreaView>
      );
    } else if (this.state.actualPageId === 3) {
      return (
        <SafeAreaView style={styles.mainContainer}>
          <AllMinorsScreen changePage={this.changePage} />
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    // alignItems: "center",
    marginLeft: 20,
    paddingRight: 20,
    marginTop: 63,
    backgroundColor: "#fff",
  },
});
