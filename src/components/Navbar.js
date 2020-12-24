import React from "react";
import { View, StyleSheet, Platform, Text, Image } from "react-native";

export default function Navbar({ title, handleText, onPress }) {
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
      <View onPress={onPress}>
        <Image
          style={styles.backArrow}
          source={require("../../assets/svg/backArrow.svg")}
        />
        <Text>{handleText}</Text>
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 55,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  backArrow: {
    width: Platform.OS === "ios" ? 40 : 8,
    height: 17,
  },
  navbarAndroid: {},
  navbarIos: {},
  text: {
    color: "#000",
    fontWeight: "500",
    fontSize: 16,
  },
});
