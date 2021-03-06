import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

import ExchangeCard from "../components/ExchangeCard";
import MainButton from "../components/MainButton";

export default class SuccessExchangeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  //нужно отформатировать алерты
  sucsessExchange = (changePage) => {
    Alert.alert(
      "Ты успешно обменялся манором",
      "Обязательно прочитай нашу инструкцию, чтобы грамотно проинформировать об обмене учебную часть",
      [
        {
          text: "Читать",
          onPress: () => changePage(0),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };
  unSucsessExchange = (changePage) => {
    Alert.alert(
      "Ты не можешь обменяться  :(",
      "У твоега факультета есть ограничения по выбору майнора, можешь ознакомится со всеми органичениями по ссылке",
      [
        {
          text: "Смотреть ограничения",
          onPress: () => changePage(0),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.cardsCollection}>
          <ExchangeCard
            title="Текущий манор"
            minorName="Советская и постсоветская культура: политики, практики, конфликты"
            educationYear="2020 год набора"
            credits="25 кредитов"
            minorAddresss="Москва, ул. Старая Басманная д. 21/4, стр. 3"
          />
          <View style={styles.arrowCollect}>
            <Image
              style={styles.arrow1}
              source={require("../../assets/png/arrow.png")}
            />
            <Image
              style={styles.arrow2}
              source={require("../../assets/png/arrow.png")}
            />
          </View>
          <ExchangeCard
            title="Новый майнор"
            minorName="Биология"
            educationYear="2020 год набора"
            credits="25 кредитов"
            minorAddresss="Москва, ул. Старая Басманная д. 21/4, стр. 3"
            isNewMinor={true}
          />
          <View style={styles.captionBody}>
            <Text style={styles.captionTitle}>
              Вы меняетесь с AGDEVLETKILDEEVA
            </Text>
            <Text style={styles.caption}>
              Если хотите узнать больше о майноре или о причине перевода, вы
              можете связаться со студентом
            </Text>
            <View style={styles.linksCollection}>
              <Text style={styles.link}>Почта</Text>
              <Text style={styles.link}>VK</Text>
              <Text style={styles.link}>Facebook</Text>
            </View>
          </View>
        </View>
        <MainButton
          onPress={() =>
            this.props.navigation.push("SucsessExchangeDescription")
          }
          title={"Обменяться"}
        />
      </View>
    );
  }
}
// <MainButton onPress={this.sucsessExchange} title={"Обменяться"} />

SuccessExchangeScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Успешный обмен",
});

const styles = StyleSheet.create({
  cardsCollection: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  arrowCollect: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
    width: 296,
    justifyContent: "space-between",
    marginRight: "auto",
    marginLeft: "auto",
  },
  arrow1: {},
  arrow2: {
    transform: [{ rotate: "180deg" }],
  },
  captionBody: {
    marginTop: 38,
  },
  captionTitle: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: "#9D9D9D",
    marginTop: 12,
    width: 320,
    marginBottom: 5,
  },
  linksCollection: {
    flexDirection: "row",
    marginBottom: 40,
  },
  link: {
    fontSize: 16,
    color: "#0488FF",
    marginRight: 20,
  },
});
