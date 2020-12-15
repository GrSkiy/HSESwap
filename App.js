import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";

import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MainScreen />
    </SafeAreaView>
  );
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
