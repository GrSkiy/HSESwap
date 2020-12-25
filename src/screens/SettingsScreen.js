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
import Navbar from "../components/Navbar";
import Line from "../components/Line";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.settingBody}>
        <Navbar
          title={"Настройки"}
          backTitle={"Назад"}
          changeTitle={"            "}
          handleBack={() => this.props.changePage(1)}
        />
        <View style={styles.settingBody}>
          <View style={styles.pointsCollection}>
            <SettingPoint
              title={"Открыть мое объявление"}
              changePage={this.props.changePage}
              toggle={true}
            />
            <SettingPoint
              title={"Мои данные"}
              changePage={() => this.props.changePage(2.1)}
            />
            <SettingPoint
              title={"Социальные сети"}
              changePage={() => this.props.changePage(2.2)}
            />
            <SettingPoint
              title={"Список всех майноров"}
              changePage={() => this.props.changePage(2.3)}
            />
            <SettingPoint
              title={"Изменить настройки фильтров"}
              changePage={() => this.props.changePage(2)}
            />
            <SettingPoint
              title={"Мои обмены"}
              changePage={() => this.props.changePage(2)}
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

const styles = StyleSheet.create({
  settingBody: {
    justifyContent: "space-between",
    marginTop: 20,
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
