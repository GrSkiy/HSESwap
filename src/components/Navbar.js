import React from "react";
import { View, StyleSheet, Platform, Text } from "react-native";

export default function Navbar({ title }) {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        }),
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 95,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: "#0D407B",
  },
  navbarIos: {
    borderBottomColor: "#0D407B",
    borderBottomWidth: 1,
    backgroundColor: "#0D407B",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
