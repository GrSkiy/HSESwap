import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import SettingPoint from "../components/SettingPoint";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.settingBody}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.changePage(1)}
            activeOpacity={0.5}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>

          <Text style={styles.h1}>Настройки</Text>
          <Text> </Text>
        </View>
        <View style={styles.settingBody}>
          <SettingPoint
            title={"Основная информация"}
            changePage={this.props.changePage}
          />
          <SettingPoint
            title={"Социальные сети"}
            changePage={this.props.changePage}
          />
          <SettingPoint
            title={"Уведомления"}
            changePage={this.props.changePage}
          />
          <Text>Выход</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 31,
  },
  settingBody: {
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
