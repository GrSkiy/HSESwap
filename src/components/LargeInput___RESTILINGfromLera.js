import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

const isHeHaveInputValue = (props) => {
  let input;
  if (props.value) {
    return (
      <TextInput
        style={styles.input}
        // onChangeText={(value) => setText(value)}
        onChangeText={props.setText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor="#979797"
      />
    );
  } else {
    return (
      <TextInput
        style={styles.input}
        // onChangeText={(value) => setText(value)}
        onChangeText={props.setText}
        value={props.value}
        placeholder={props.lableText}
        placeholderTextColor="#979797"
      />
    );
  }
};

export default function SmallNumberInput(props) {
  //связать с данными, мол если что-то есть, то выводим значение
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{props.lableText}</Text>
      <View style={styles.componentsWhisIcon}>{isHeHaveInputValue(props)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    width: "100%",
  },
  input: {
    color: "#000",
    width: "90%",
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    fontSize: 16,
    marginBottom: 12,
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
});
