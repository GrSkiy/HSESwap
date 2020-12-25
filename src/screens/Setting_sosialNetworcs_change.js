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

import FullInfoInput from "../components/FullInfoInput";
import Navbar from "../components/Navbar";
import Line from "../components/Line";

import LargeInput from "../components/LargeInput___RESTILINGfromLera";

export default class Setting_sosialNetworcs_view extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemsBody}>
        <Navbar
          title={"Социальные сети"}
          backTitle={"Назад"}
          changeTitle={"Готово"}
          handleBack={() => this.props.changePage(2.1)}
          handleChange={() => this.props.changePage(2.1)}
        />
        <View style={styles.itemsCollection}>
          <LargeInput
            lableText={"VK"}
            setText={() => console.log("value")}
            value={"lera_leo"}
          />
          <Line />
          <LargeInput
            lableText={"Facebook"}
            setText={() => console.log("value")}
          />
          <Line />
          <LargeInput
            lableText={"Telegram"}
            setText={() => console.log("value")}
            value={"@ALeo75C"}
          />
        </View>
      </View>
    );
  }
}
// <Text style={styles.caption}>
//   Ты можешь поменять информацию о своих социальных сетях, если при
//   регистрации допустил ошибку. Все изменения будут сохранены.
// </Text>

const styles = StyleSheet.create({
  itemsBody: {
    width: "100%",
  },
  itemsCollection: {
    marginTop: 20,
  },
  caption: {
    fontSize: 12,
    color: "#9D9D9D",
    marginTop: 20,
    marginLeft: 20,
    width: 320,
  },
});
