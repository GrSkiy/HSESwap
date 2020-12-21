import React from "react";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";

export default function LinkButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.linkButtonArea}>
      <Text style={styles.likButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkButtonArea: {
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  likButtonText: {
    fontSize: 12,
    color: "#0D407B",
    fontWeight: "normal",
    alignSelf: "center",
  },
});
