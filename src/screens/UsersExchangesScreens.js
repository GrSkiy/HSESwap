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
  Alert,
} from "react-native";
import MainButton from "../components/MainButton";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

class UsersExchangesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>СПИСОК ОБМЕНОВ</Text>
      </SafeAreaView>
    );
  }
}

UsersExchangesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Мои обмены",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={"chatbubble-ellipses-outline"}
        onPress={() => navigation.push("Chat")}
      />
    </HeaderButtons>
  ),
});

export default UsersExchangesScreen;
