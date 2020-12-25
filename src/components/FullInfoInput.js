import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Line from "../components/Line";

export default function FullInfoInput(props) {
  return (
    <View style={styles.block}>
      <View style={styles.blockContent}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.info}>{props.content}</Text>
      </View>
      <Line />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: "100%",
  },
  blockContent: {
    marginLeft: 20,
  },
  title: {
    fontSize: 12,
    color: "#005AAB",
    fontWeight: "bold",
    marginBottom: 6,
  },
  info: { fontSize: 14, marginBottom: 12 },
});
