import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

import Card from "../components/Card";

export default function MainScreen() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.h1}>All minors</Text>
        <Image
          style={styles.hamburger}
          source={require("../../assets/hamburger.png")}
          onPress={handleClick}
        />
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const handleClick = () => {
  console.log("miy");
};

const styles = StyleSheet.create({
  hamburger: {
    width: 30,
    height: 30,
  },
  list: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 60,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 31,
  },
  h1: {
    fontSize: 26,
    fontWeight: "bold",
    justifyContent: "space-between",
  },
});
