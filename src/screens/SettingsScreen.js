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
import MainButton from "../components/MainButton";
import Line from "../components/Line";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  // <SettingPoint
  //   title={"Изменить настройки фильтров"}
  //   changePage={() => this.props.navigation.push("Settings")}
  // />

  async componentDidMount() {
    const url = "http://127.0.0.1:3000/api/v1/profiles";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
  }

  renderProfileData = (data) => {
    console.log(data);
    return (
      <View style={styles.settingBody}>
        <View>
          <Text>{data.first_name}</Text>
          <Text>{data.last_name}</Text>
          <Text>{data.minor}</Text>
          <Text>{data.year}</Text>
          <Text>{data.whished_minors}</Text>
          <SettingPoint
            title={"Открыть мое объявление"}
            toggle={data.isPublished}
          />
        </View>

        <View style={styles.settingBody}>
          <View style={styles.pointsCollection}>
            <SettingPoint
              title={"Мои данные"}
              changePage={() =>
                this.props.navigation.push("Settings", {
                  data: data,
                })
              }
            />
            <SettingPoint
              title={"Список всех майноров"}
              changePage={() => this.props.navigation.push("AllMinors")}
            />
            <SettingPoint
              title={"Мои обмены"}
              changePage={() => this.props.navigation.push("UsersExchanges")}
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
  };

  render() {
    return this.state.loading ? (
      <MainButton
        onPress={() => this.props.navigation.push("login")}
        title={"Войти"}
      />
    ) : (
      <View contentContainerStyle={styles.list}>
        <MainButton
          onPress={() => this.props.navigation.push("login")}
          title={"Войти"}
        />
        {this.renderProfileData(this.state.data)}
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
