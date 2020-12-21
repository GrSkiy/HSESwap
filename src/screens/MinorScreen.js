import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class MinorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    let {
      myMinorName,
      myMinorCredits,
      myMinorAdress,
      myMinorHead,
      myMinorDescription,
    } = this.props;

    return (
      <View>
        <View></View>
        <View style={styles.container}>
          <Text>Мой майнор</Text>
          <Text>{myMinorName}</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Кредиты</Text>
            <Text>{myMinorCredits}</Text>
          </View>
          <View>
            <Text>Адрес</Text>
            <Text>{myMinorAdress}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text>Ответственный за майнор</Text>
          <Text>{myMinorHead}</Text>
        </View>
        <View style={styles.container}>
          <Text>Описание майнора</Text>
          <Text>{myMinorDescription}</Text>
        </View>
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
