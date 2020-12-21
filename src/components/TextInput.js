import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default function MyComponentTextInput({
  lableText,
  value,
  setText,
  name,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.ladle}>{lableText}</Text>
      <View style={styles.componentsWhisIcon}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={value}
        />
        <Icon style={styles.icon} name={name} size={20} color="#BDBDBD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginBottom: 20,
    color: "#BDBDBD",
    //width: 200,
    height: 48,
    fontSize: 16,
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
  ladle: {
    marginBottom: 12,
    color: "#0D407B",
    fontWeight: "bold",
    fontSize: 12,
  },
  container: {},
});
