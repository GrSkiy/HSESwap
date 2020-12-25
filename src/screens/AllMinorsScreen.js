import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default class AllMinorsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Navbar
          title={"Все майноры"}
          backTitle={"Назад"}
          changeTitle={"              "}
          handleBack={() => this.props.changePage(2)}
        />
        <ScrollView contentContainerStyle={styles.list}>
          <Card
            city="Москва"
            year="2020"
            title="Биоинформатика"
            adres="Старая Басманная 11"
            credits="5"
            exchangeMinors={[]}
          />
          <Card
            city="Москва"
            year="2020"
            title="Театр с нуля"
            adres="Старая Басманная 11"
            credits="5"
            exchangeMinors={[]}
          />
          <Card
            city="Москва"
            year="2020"
            title="Биология"
            adres="Старая Басманная 11"
            credits="5"
            exchangeMinors={[]}
          />
          <Card
            city="Москва"
            year="2020"
            title="Азия"
            adres="Старая Басманная 11"
            credits="5"
            exchangeMinors={[]}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  list: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 60,
  },
  header: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 31,
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "space-between",
  },
});
