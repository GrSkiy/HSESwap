import React from "react";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";

export default function MainButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainButtonArea}>
      <Text style={styles.mainButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainButtonArea: {
    marginTop: 200,
    elevation: 8,
    backgroundColor: "#0D407B",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 70,
  },
  mainButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
