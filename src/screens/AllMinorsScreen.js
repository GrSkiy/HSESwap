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

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

// import { AppContext } from "../context/appContext";
// import { GetAllMinors } from "../context/controller";

export default class AllMinorsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const url = "http://localhost:3000/api/v1/minors";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
  }

  renderCards = () => {
    const cities = this.state.data;
    let bloks = [];
    let minors = [];
    cities.forEach((city, i) => {
      city.minors.forEach((minor, y) => {
        minors.push(
          <Card
            city={city.city}
            year={minor.year}
            title={minor.name}
            adres={minor.adress}
            credits={minor.credits}
            handleBack={() =>
              this.props.navigation.navigate("Minor", {
                url: minor.url,
              })
            }
            exchangeMinors={[]}
            key={i + "_" + y}
          />
        );
      });
    });

    return (
      <ScrollView contentContainerStyle={styles.list}>{minors}</ScrollView>
    );
  };

  render() {
    return this.state.loading ? (
      <Text>Loading.....</Text>
    ) : (
      <View>{this.renderCards()}</View>
    );
  }
}

AllMinorsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Все майноры",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={"filter"}
        onPress={() => navigation.push("Filter")}
      />
    </HeaderButtons>
  ),
});

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
