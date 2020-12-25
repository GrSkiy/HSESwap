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

    this.state = {
      isEnabled: false,
    };
  }
  toggleSwitch = () => {
    this.setState({ isEnabled: !this.state.isEnabled });
  };

  renderActiveItem = () => {
    if (this.props.toggle) {
      //надо понять как добавить обводку и
      return (
        <Switch
          trackColor={{ false: "#E7F4FF", true: "#CCDEEE" }}
          thumbColor={"#005AAB"}
          ios_backgroundColor="#CCDEEE"
          onValueChange={this.toggleSwitch}
          value={this.state.isEnabled}
        />
      );
    } else {
      return;
      <Image
        style={styles.backArrow}
        source={require("../../assets/png/navbarBackIOS3x.png")}
      />;
    }
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
