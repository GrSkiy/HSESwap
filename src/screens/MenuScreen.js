import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Switch,
  TouchableOpacity,
} from "react-native";

export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabled: false,
    };
  }

  toggleSwitch = () => {
    this.setState({ isEnabled: !this.state.isEnabled });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.changePage(2)}
            activeOpacity={0.5}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/settings.png")}
            />
          </TouchableOpacity>
          <Text style={styles.h1}>vsinsafutdinova</Text>
          <TouchableOpacity
            onPress={() => this.props.changePage(0)}
            activeOpacity={0.5}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/close_big.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.minorList}>
          <Text style={styles.minorChips}>Москва</Text>
          <Text style={styles.minorChips}>3 курс</Text>
          <Text style={styles.minorChips}>Театр с нуля</Text>
        </View>
        <Text>Мои желания</Text>
        <View style={styles.minorList}>
          <Text style={styles.minorChips}>Биоинформатика</Text>
          <Text style={styles.minorChips}>Психология</Text>
          <Text style={styles.minorChips}>Биология</Text>
          <Text style={styles.minorChips}>Азия</Text>
        </View>
        <View style={styles.setPoint}>
          <Text style={styles.p}>Настроить фильтры</Text>
          <Button title="0" onPress={() => console.log("piy")} />
        </View>
        <View style={styles.setPoint}>
          <Text style={styles.p}>Видимость моего профиля</Text>
          <Switch
            trackColor={{ false: "#3e3e3e", true: "#3e3e3e" }}
            thumbColor={this.state.isEnabled ? "#005AAB" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitch}
            value={this.state.isEnabled}
          />
        </View>

        <Button onPress={() => this.props.changePage(3)} title="All minors" />
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
  setPoint: {
    height: 47,
    alignItems: "center",
    flexDirection: "row",
    // width: "100%",
    justifyContent: "space-between",
  },
  p: {
    fontSize: 16,
    color: "#000",
  },
  icon: {
    width: 30,
    height: 30,
  },
  minorList: {
    width: "100%",
    flexWrap: "wrap",
    marginTop: 16,
    // flex: 1,
    flexDirection: "row",
  },
  minorChips: {
    color: "#005AAB",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 9,
    height: "auto",

    backgroundColor: "#F2F2F2",
    borderRadius: 36,
    marginRight: 9,
  },
});
