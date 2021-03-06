import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function MediumSelect({ lableText, placeholder, handlePress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lableText}</Text>
      <View style={styles.componentsWhithIcon}>
        <View style={styles.input} onPress={handlePress}>
          <Text style={styles.inputPlaceholder}>{placeholder}</Text>
          <Image
            style={styles.dropTriangle}
            source={require("../../assets/svg/dropTriangle.svg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    width: 248,
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

  inputPlaceholder: {
    color: "#979797",
  },

  dropTriangle: {
    width: 20,
    height: 20,
  },

  componentsWhithIcon: {
    flexDirection: "row",
    height: 48,
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
