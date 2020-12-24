import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

export default function SmallNumberInput({
  marginBottom,
  lableText,
  placeholder,
  setText,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lableText}</Text>
      <View style={styles.componentsWhisIcon}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setText(value)}
          // value={}
          placeholder={placeholder}
          placeholderTextColor="#979797"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "#000",
    width: "100%",
    paddingLeft: 20,
    height: 48,
    fontSize: 16,
    marginBottom: 30,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,

    elevation: 11,
    borderRadius: 10,
  },
  componentsWhisIcon: {
    flexDirection: "row",
    //  width: 150,
  },

  searchIcon: {
    padding: 10,
  },
  lable: {
    marginBottom: 12,
    color: "#005AAB",
    fontWeight: "bold",
    fontSize: 12,
  },
  container: {},
});
