import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

export default class SettingPoint extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.settingPoint}>
        <Text style={styles.p}>{this.props.title}</Text>
        <Button title="00000000" onPress={() => console.log("piy")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingPoint: {
    height: 47,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  p: {
    fontSize: 16,
    color: "#000",
  },
});
