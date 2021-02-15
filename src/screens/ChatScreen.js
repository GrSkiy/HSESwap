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

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Чат</Text>
      </SafeAreaView>
    );
  }
}

ChatScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Чат",
});

export default ChatScreen;
