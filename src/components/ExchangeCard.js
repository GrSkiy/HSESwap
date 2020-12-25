import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class ExchangeCardCurrent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      minorName,
      educationYear,
      credits,
      minorAdress,
      title,
      isNewMinor,
    } = this.props;

    let styleSadow = styles.cardContainerCurrent;

    if (isNewMinor) {
      styleSadow = styles.cardContainerNew;
    }

    return (
      <View style={styleSadow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.minorName}>{minorName}</Text>
        <View style={styles.yearAndCredits}>
          <Text style={styles.text}>{educationYear}</Text>
          <Text style={styles.text}>{credits}</Text>
        </View>
        <Text style={styles.text}>{minorAdress}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainerCurrent: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    backgroundColor: "#FFF",

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
  cardContainerNew: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    backgroundColor: "#FFF",

    shadowColor: "#005AAB", //цвет тени не меняется, но условие работает
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,
    borderRadius: 20,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    color: "#9D9D9D",
    marginBottom: 13,
  },
  minorName: {
    fontSize: 18,
    color: "#005AAB",
    fontWeight: "bold", //Изменить на semiBold
    marginBottom: 5,
  },
  yearAndCredits: {
    flexDirection: "row",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
  },
});
