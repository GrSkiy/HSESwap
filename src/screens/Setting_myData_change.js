import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

import FullInfoInput from "../components/FullInfoInput";
import Navbar from "../components/Navbar";
import Line from "../components/Line";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

import LargeInput from "../components/LargeInput___RESTILINGfromLera";

export default class Setting_myData_view extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.getParam("data"),
    };
  }

  changeDate = (field, newData) => {
    this.setState.data((field = newData));
    console.log(this.state);
  };

  render() {
    return (
      <View style={styles.itemsBody}>
        <ScrollView style={styles.itemsCollection}>
          <LargeInput
            lableText={"Фамилия"}
            setText={() => this.changeState(last_name, value)}
            value={this.state.data.last_name}
            field={"last_name"}
          />
          <Line />
          <LargeInput
            lableText={"Имя"}
            setText={() => this.changeState(first_name, value)}
            value={this.state.data.first_name}
          />
          <Line />
          <LargeInput
            lableText={"Отчество"}
            setText={() => this.changeState(middle_name, value)}
            value={this.state.data.middle_name}
          />
          <Line />
          <LargeInput
            lableText={"Почта HSE"}
            setText={() => this.changeState(email, value)}
            value={this.state.data.email}
          />
          <Line />

          <Line />
          <LargeInput
            lableText={"Мой кампус"}
            setText={() => this.changeState(city, value)}
            value={this.state.data.city}
          />
          <Line />
          <LargeInput
            lableText={"Мой майнор"}
            setText={() => this.changeState(minor, value)}
            value={this.state.data.minor}
          />
          <Line />
        </ScrollView>
      </View>
    );
  }
}

Setting_myData_view.navigationOptions = ({ navigation }) => ({
  headerTitle: "Мои данные",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={"checkmark-sharp"}
        // onPress={() => navigation.navigate("PersonData")}
        onPress={() => console.log(Setting_myData_view.state)}
      />
    </HeaderButtons>
  ),
});

// <Text style={styles.caption}>
//   Ты можешь поменять информацию о своих социальных сетях, если при
//   регистрации допустил ошибку. Все изменения будут сохранены.
// </Text>

const styles = StyleSheet.create({
  itemsBody: {
    width: "100%",
  },
  itemsCollection: {
    marginTop: 20,
  },
  caption: {
    fontSize: 12,
    color: "#9D9D9D",
    marginTop: 20,
    marginLeft: 20,
    width: 320,
  },
});
