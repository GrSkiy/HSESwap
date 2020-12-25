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

export default class Setting_myData_view extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemsBody}>
        <Navbar
          title={"Мои данные"}
          backTitle={"Назад"}
          changeTitle={"Изменить"}
          handleBack={() => {
            console.log(3);
          }}
          handleChange={() => {
            console.log(4);
          }}
        />
        <View style={styles.itemsCollection}>
          <FullInfoInput title={"Фамилия"} content={"Салаватовна"} />
          <FullInfoInput title={"Имя"} content={"Валерия"} />
          <FullInfoInput title={"Отчество"} content={"Салаватовна"} />
          <FullInfoInput
            title={"Почта HSE"}
            content={"vsinsafutdinova@edu.hse.ru"}
          />
          <FullInfoInput title={"Мой кампус"} content={"Москва"} />
          <FullInfoInput title={"Мой майнор"} content={"Социология"} />
        </View>
        <Text style={styles.caption}>
          Ты можешь поменять информацию о себе, если при регистрации допустил
          ошибку. Все изменения будут сохранены.
        </Text>
      </View>
    );
  }
}

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
