import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class ExchangeCardCurrent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { minorName, educationYear, credits, minorAddresss } = this.props;

    return (
      <View>
        <Text>Новый майнор</Text>
        <Text>{minorName}</Text>
        <Text>{educationYear}</Text>
        <Text>{credits}</Text>
        <Text>{minorAddresss}</Text>
      </View>
    );
  }
}
