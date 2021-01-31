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

import FullInfoInput from "../components/FullInfoInput";
import Line from "../components/Line";

export default class Setting_myData_view extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemsBody}>
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

          <FullInfoInput title={"VK"} content={"@lera_leo"} />
          <FullInfoInput title={"Facebook"} content={"Лера Инсафутдинова"} />
          <FullInfoInput title={"Telegram"} content={"@ALeo75C"} />
        </View>
        <Text style={styles.caption}>
          Ты можешь поменять информацию о себе, если при регистрации допустил
          ошибку. Все изменения будут сохранены.
        </Text>
      </View>
    );
  }
}

Setting_myData_view.navigationOptions = ({ navigation }) => ({
  headerTitle: "Личные настройки",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={"pencil"}
        onPress={() => navigation.push("EditPersonData")}
      />
    </HeaderButtons>
  ),
});

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
