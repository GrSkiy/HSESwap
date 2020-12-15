import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Card() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.h4}>Кампус</Text>
        <Text style={styles.h4}>Год</Text>
      </View>
      <Text style={styles.h1}>Название майнора</Text>
      <Text style={styles.h4}>Адрес</Text>
      <Text style={styles.h4}>Кредиты</Text>
      <View style={styles.minorList}>
        <Text style={styles.minorChips}>Майнор</Text>
        <Text style={styles.minorChips}>Майнор</Text>
        <Text style={styles.minorChips}>Майнор</Text>
        <Text style={styles.minorChips}>Майнор</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    width: "97%",
    backgroundColor: "#FFF",
    paddingTop: 20,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,
    borderRadius: 20,
    elevation: 5,
  },
  cardHeader: {
    marginBottom: 13,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  h4: {
    fontSize: 12,
    color: "#8C8C8C",
    marginBottom: 5,
  },
  h1: {
    fontSize: 18,
    marginBottom: 5,

    fontWeight: "bold",
    color: "#000",
  },
  minorList: {
    width: "100%",
    flexWrap: "wrap",
    marginTop: 16,
    // flex: 1,
    flexDirection: "row",
  },
  minorChips: {
    color: "#005AAB",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 9,
    height: "auto",

    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 23,
    shadowOpacity: 0.09,
    borderRadius: 36,
    elevation: 23,
    marginRight: 9,
  },
});
