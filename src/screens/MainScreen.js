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

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minors: [
        {
          city: "Москва",
          year: "2020",
          title: "Театр с нуля",
          adres: "Старая Басманная 11",
          credits: "5",
          exchangeMinors: ["Биоинформатика", "Психология", "Биология", "Азия"],
        },
        {
          city: "Москва",
          year: "2020",
          title: "Биоинформатика",
          adres: "Старая Басманная 11",
          credits: "5",
          exchangeMinors: ["Театр с нуля", "Психология", "Биология", "Азия"],
        },
        {
          city: "Москва",
          year: "2020",
          title: "Психология",
          adres: "Старая Басманная 11",
          credits: "5",
          exchangeMinors: [
            "Биоинформатика",
            "Театр с нуля",
            "Биология",
            "Азия",
          ],
        },
        {
          city: "Москва",
          year: "2020",
          title: "Биология",
          adres: "Старая Басманная 11",
          credits: "5",
          exchangeMinors: ["Биоинформатика", "Психология", "Биология", "Азия"],
        },
        {
          city: "Москва",
          year: "2020",
          title: "Азия",
          adres: "Старая Басманная 11",
          credits: "5",
          exchangeMinors: [
            "Биоинформатика",
            "Психология",
            "Биология",
            "Театр с нуля",
          ],
        },
      ],
    };
  }

  renderCards = () => {
    let cardsItems = [];
    this.state.minors.forEach((minor, i) => {
      cardsItems.push(
        <Card
          city={minor.city}
          year={minor.year}
          title={minor.title}
          adres={minor.adres}
          credits={minor.credits}
          exchangeMinors={minor.exchangeMinors}
          key={i}
        />
      );
    });
    return cardsItems;
  };

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.h1}>Minors for you</Text>
          <TouchableOpacity
            onPress={() => this.props.changePage(1)}
            activeOpacity={0.5}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/hamburger.png")}
            />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.list}>
          {this.renderCards()}
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
    fontSize: 26,
    fontWeight: "bold",
    justifyContent: "space-between",
  },
});
