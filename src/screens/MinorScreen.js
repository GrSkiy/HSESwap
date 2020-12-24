//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";
import Navbar from "../components/Navbar";

export default class MinorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    let { name, credits, adress, head, description, descUrl } = this.props;

    return (
      <SafeAreaView style={styles.safeArea}>
        <Navbar
          title={"Майнор"}
          onPress={() => {
            console.log(1);
          }}
        />
        <View style={styles.safeAreaContainer}>
          <View style={styles.container}>
            <Text style={styles.headerMinor}>Мой майнор</Text>
            <Text style={styles.minorName}>{name}</Text>
          </View>
          <View style={styles.creditAdressContainer}>
            <View style={styles.creditsContainer}>
              <Text style={styles.headerCredits}>Кредиты</Text>
              <Text style={styles.credits}>{credits}</Text>
            </View>
            <View style={styles.adressContainer}>
              <Text style={styles.header}>Адрес</Text>
              <Text style={styles.adress}>{adress}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.header}>Ответственный за майнор</Text>
            <Text style={styles.head}>{head}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.header}>Описание майнора</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 20,
  },

  header: {
    color: "#005AAB",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 12,
  },

  headerMinor: {
    color: "#005AAB",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 12,
    marginTop: 20,
  },

  headerCredits: {
    marginBottom: 4,
    color: "#005AAB",
    fontWeight: "bold",
    fontSize: 12,
  },
  colorArea: {
    backgroundColor: "#fff",
  },

  safeAreaContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    paddingBottom: Platform.OS === "ios" ? 180 : 44,
  },

  minorName: {
    fontSize: 18,
    fontWeight: "500",
  },

  creditAdressContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },

  credits: {
    fontSize: 22,
  },

  adressContainer: {
    marginLeft: 36,
  },
});
