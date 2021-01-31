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

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

import SettingPoint from "../components/SettingPoint";
import Navbar from "../components/Navbar";
import Line from "../components/Line";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  // <SettingPoint
  //   title={"Изменить настройки фильтров"}
  //   changePage={() => this.props.navigation.push("Settings")}
  // />
  render() {
    return (
      <View style={styles.settingBody}>
        <View style={styles.settingBody}>
          <View style={styles.pointsCollection}>
            <SettingPoint title={"Открыть мое объявление"} toggle={true} />
            <SettingPoint
              title={"Мои данные"}
              changePage={() => this.props.navigation.push("PersonData")}
            />
            <SettingPoint
              title={"Список всех майноров"}
              changePage={() => this.props.navigation.push("AllMinors")}
            />
            <SettingPoint
              title={"Мои обмены"}
              changePage={() => this.props.navigation.push("Settings")}
            />
            <Line />
          </View>

          <View style={styles.logOut}>
            <Line />
            <TouchableOpacity>
              <Text style={styles.logOutTitle}>Выйти</Text>
            </TouchableOpacity>
            <Line />
          </View>
        </View>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Настройки",
});

const styles = StyleSheet.create({
  settingBody: {
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  pointsCollection: {
    width: "auto",
  },
  icon: {
    width: 30,
    height: 30,
  },
  logOut: {
    alignItems: "center",
    paddingBottom: 79,
  },
  logOutTitle: {
    color: "#BF0C0C",
    fontSize: 17,
    marginBottom: 12,
  },
});
