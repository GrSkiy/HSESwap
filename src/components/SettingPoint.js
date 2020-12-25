import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";

import Line from "../components/Line";

export default class SettingPoint extends React.Component {
  constructor(props) {
    super(props);
  }

  renderActiveItem = () => {
    let item;
    if (this.props.toggle) {
      //___________НЕРЕНДЕРИТСЯ
      //передовать функцию изменения через контекст
      <Switch
        trackColor={{ false: "#3e3e3e", true: "#3e3e3e" }}
        // thumbColor={this.state.isEnabled ? "#005AAB" : "#f4f3f4"}
        thumbColor={"#005AAB"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => console.log("miy")}
        value={false}
      />;
    } else {
      item = (
        <Image
          style={styles.backArrow}
          source={require("../../assets/png/navbarBackIOS3x.png")}
        />
      );
    }
    return item;
  };

  render() {
    return (
      <View style={styles.settingLine}>
        <Line />
        <View style={styles.settingPoint}>
          <Text style={styles.p}>{this.props.title}</Text>
          <TouchableOpacity
            style={styles.handleContainer}
            onPress={this.props.handleBack}
          >
            {this.renderActiveItem()}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingLine: {
    marginBottom: 13,
  },
  settingPoint: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  p: {
    fontSize: 16,
    color: "#000",
  },
  backArrow: {
    width: 8,
    height: 17,
    transform: [{ rotate: "180deg" }],
  },
});
