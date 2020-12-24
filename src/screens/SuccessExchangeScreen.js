import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ExchangeCardCurrent from "../components/ExchangeCardCurrent";
import ExchangeCardNew from "../components/ExchangeCardNew";

export default class SuccessExchangeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View> </View>
        <ExchangeCardCurrent
          minorName="Советская и постсоветская культура: политики, практики, конфликты"
          educationYear="2020 год набора"
          credits="25 кредитов"
          minorAdress="Москва, ул. Старая Басманная д. 21/4, стр. 3"
        />
        <View>
          <Text>стрелочка</Text>
          <Text>стрелочка</Text>
        </View>
        <ExchangeCardNew
          minorName="Советская и постсоветская культура: политики, практики, конфликты"
          educationYear="2020 год набора"
          credits="25 кредитов"
          minorAdress="Москва, ул. Старая Басманная д. 21/4, стр. 3"
        />
        <View>
          <Text>Вы меняетесь с agdevletkildeeva</Text>
          <Text>
            Если хотите узнать больше о майноре или о причине перевода, вы
            можете связаться со студентом
          </Text>
          <View>
            <Text>Почта</Text>
            <Text>ВК</Text>
            <Text>Фейсбук</Text>
          </View>
        </View>
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
