import React from "react";
import { StyleSheet, View, Text } from "react-native";

const renderExchangeMinors = (minors) => {
  let minorItems = [];
  if (minors.length > 0) {
    minors.forEach((minor, i) => {
      minorItems.push(
        <Text style={styles.minorChips} key={i}>
          {minor}
        </Text>
      );
    });
    return <View style={styles.minorList}>{minorItems}</View>;
  }
};

export default function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.h4}>
          {props.city} • {props.year}
        </Text>
      </View>
      <Text style={styles.h1}>{props.title}</Text>
      <Text style={styles.h4}>{props.adres}</Text>
      <Text style={styles.h4}>{props.credits} кредитов</Text>
      {renderExchangeMinors(props.exchangeMinors)}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    width: "100%",
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

    backgroundColor: "#F2F2F2",
    borderRadius: 36,
    marginRight: 9,
  },
});
