import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

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
          title={"Мои данные"}
          backTitle={"Назад"}
          changeTitle={"Готово"}
          handleBack={() => this.props.changePage(2.1)}
          handleChange={() => this.props.changePage(2.1)}
        />

        <ScrollView style={styles.itemsCollection}>
          <LargeInput
            lableText={"Фамилия"}
            setText={() => console.log("value")}
            value={"Салаватовна"}
          />
          <Line />
          <LargeInput
            lableText={"Отчество"}
            setText={() => console.log("value")}
          />
          <Line />
          <LargeInput
            lableText={"Почта HSE"}
            setText={() => console.log("value")}
            value={"vsinsafutdinova@edu.hse.ru"}
          />
          <Line />

          <LargeInput
            lableText={"Telegram"}
            setText={() => console.log("value")}
            value={"@ALeo75C"}
          />
          <Line />
          <LargeInput
            lableText={"Мой кампус"}
            setText={() => console.log("value")}
            value={"Москва"}
          />
          <Line />
          <LargeInput
            lableText={"Мой майнор"}
            setText={() => console.log("value")}
            value={"Театр с нуля"}
          />
        </ScrollView>
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
