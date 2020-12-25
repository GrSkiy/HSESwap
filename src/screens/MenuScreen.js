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

import Navbar from "../components/Navbar";

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
        <Navbar
          title={"vsinsafutdinova"}
          backTitle={"        "}
          changeTitle={"        "}
          handleBack={() => this.props.changePage(2)}
          handleChange={() => this.props.changePage(0)}
          setting={true}
        />
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
