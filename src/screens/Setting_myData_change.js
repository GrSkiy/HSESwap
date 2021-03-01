import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

import FullInfoInput from "../components/FullInfoInput";
import Navbar from "../components/Navbar";
import Line from "../components/Line";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

import LargeInput from "../components/LargeInput___RESTILINGfromLera";

let CONFIRMATION_DATA = { data: "" };

export default class Setting_myData_view extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.getParam("data"),
    };
    CONFIRMATION_DATA = this.state;
  }

  getState = () => {
    console.log(this.satate);
  };

  changeDate = (field, newData) => {
    let data = this.state.data;

    if (field == "last_name") {
      data.last_name = newData;
    } else if (field == "first_name") {
      data.first_name = newData;
    } else if (field == "middle_name") {
      data.middle_name = newData;
    } else if (field == "email") {
      data.email = newData;
    } else if (field == "city") {
      data.city = newData;
    } else if (field == "minor") {
      data.minor = newData;
    }

    this.setState({ data: data });

    CONFIRMATION_DATA = { data: data };
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.itemsBody}>
        <ScrollView style={styles.itemsCollection}>
          <LargeInput
            lableText={"Фамилия"}
            setText={this.changeDate}
            value={this.state.data.last_name}
            field={"last_name"}
          />
          <Line />
          <LargeInput
            lableText={"Имя"}
            setText={this.changeDate}
            value={this.state.data.first_name}
            field={"first_name"}
          />
          <Line />
          <LargeInput
            lableText={"Отчество"}
            setText={this.changeDate}
            value={this.state.data.middle_name}
            field={"middle_name"}
          />
          <Line />
          <LargeInput
            lableText={"Почта HSE"}
            setText={this.changeDate}
            value={this.state.data.email}
            field={"email"}
          />
          <Line />

          <Line />
          <LargeInput
            lableText={"Мой кампус"}
            setText={this.changeDate}
            value={this.state.data.city}
            field={"city"}
          />
          <Line />
          <LargeInput
            lableText={"Мой майнор"}
            setText={this.changeDate}
            value={this.state.data.minor}
            field={"minor"}
          />
          <Line />
        </ScrollView>
      </View>
    );
  }
}

const confirmation = async () => {
  let data = {
    action: "update",
    update_data: {
      id: CONFIRMATION_DATA.data.id,
      first_name: CONFIRMATION_DATA.data.first_name,
      middle_name: CONFIRMATION_DATA.data.middle_name,
      last_name: CONFIRMATION_DATA.data.last_name,
      minor_id: CONFIRMATION_DATA.data.minor_name, //отправлять всей маноры для выпадашки
    },
  };
  console.log(data);
  await fetch("http://127.0.0.1:3000/api/v1/profiles", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
};

Setting_myData_view.navigationOptions = ({ navigation }) => ({
  headerTitle: "Мои данные",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={"checkmark-sharp"}
        // onPress={() => navigation.navigate("PersonData")}
        onPress={confirmation}
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
