import React from "react";
import { View, StyleSheet } from "react-native";

export default function Line() {
  return <View style={styles.line}></View>;
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#EAEAEA",
    marginBottom: 13,
  },
});
