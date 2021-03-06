import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

import Card from "../components/Card";

import { GetExchangeMinors, MyContext, info } from "../context/controller";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const url = "http://127.0.0.1:3000/api/v1/exchange_minors";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
  }

  renderCards = (minorsList) => {
    let cardsItems = [];
    minorsList.forEach((minor, i) => {
      cardsItems.push(
        <Card
          city={minor.city}
          year={minor.year}
          title={minor.minor}
          address={minor.address}
          credits={minor.credits}
          exchangeMinors={minor.whishedMinors}
          handleBack={() =>
            this.props.navigation.navigate("ExchangeCard", {
              url: minor.url,
            })
          }
          key={i}
        />
      );
    });
    return cardsItems;
  };

  render() {
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <ScrollView contentContainerStyle={styles.list}>
        {this.renderCards(this.state.data)}
      </ScrollView>
    );
  }
}

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Для тебя",

  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={"menu"}
        onPress={() => navigation.push("Profile")}
      />
    </HeaderButtons>
  ),
});

export default MainScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  list: {
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
