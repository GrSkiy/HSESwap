import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import Navbar from "../components/Navbar";
import MainButton from "../components/MainButton";

const ExchangeDescriptionScreen = ({
  handleReadMore,
  name,
  credits,
  adress,
  head,
  description,
  suits,
  mainButtonHandle,
}) => {
  let suitsText = "";

  if (suits) {
    suitsText = "Студент хочет твой майнор!";
  } else {
    let suitsText = "";
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Navbar
          title={"Предложение об обмене"}
          handleBack={() => {
            console.log(3);
          }}
          handleChange={() => {
            console.log(4);
          }}
        />
        <View style={styles.safeAreaContainer}>
          <View style={styles.suitsContainer}>
            <Text style={styles.suitsText}>{suitsText}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.headerMinor}>Название майнора</Text>
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
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Ответственный за майнор</Text>
            <Text style={styles.head}>{head}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.header}>Описание майнора</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <TouchableOpacity
            onPress={handleReadMore}
            style={styles.reedMoreContainer}
          >
            <Text style={styles.readMoreText}>Читать дальше</Text>
            <Image
              style={styles.readMoreLink}
              source={require("../../assets/png/readMoreLink2x.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainButton}>
          <MainButton title="Обменяться" onPress={mainButtonHandle} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {},
  container: {
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  reedMoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  readMoreText: {
    color: "#0488FF",
  },
  readMoreLink: {
    width: 9,
    height: 8,
    marginLeft: 6,
  },

  headerContainer: {
    marginBottom: 20,
  },

  descriptionContainer: {
    marginBottom: 12,
  },

  header: {
    color: "#005AAB",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 12,
  },

  mainButton: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 150 : -150,
    left: Platform.OS === "ios" ? 134 : 100,
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
  },

  minorName: {
    fontSize: 18,
    fontWeight: "500",
  },
  suitsText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#005AAB",
  },

  suitsContainer: {
    marginTop: 4,
    marginBottom: 10,
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

export default ExchangeDescriptionScreen;
