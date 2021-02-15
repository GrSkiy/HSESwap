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

const showAlert = (changePage) => {
  return Alert.alert(
    "Открой все возможности",
    "Чтобы иметь возможность обмениваться и изменять настройки фильтров войди или зарегестрируйся",
    [
      {
        text: "Вход",
        onPress: () => changePage(5),
        style: "cancel",
      },
      {
        text: "Регистрация",
        onPress: () => changePage(6),
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};

class InformationOfExchangeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Text>Ответственный за текущий майнор</Text>
          <Text>ФИО</Text>
          <Text>Текст</Text>
          <Text>Почта</Text>
        </View>
        <View>
          <Text>Ответственный за новый майнор</Text>
          <Text>ФИО</Text>
          <Text>Текст</Text>
          <Text>Почта</Text>
        </View>
        <View>
          <Text>С кем меняешься</Text>
          <Text>ФИО</Text>
          <Text>Текст</Text>
          <Text>Список соц.сетей</Text>
        </View>
      </SafeAreaView>
    );
  }
}

InformationOfExchangeScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Информация об обмене",
});

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    justifyContent: "space-between",
  },
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
    // alignItems: "center",
    // justifyContent: "center",
    // position: "absolute",
    marginBottom: 30,
    // left: Platform.OS === "ios" ? 134 : 100,
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

export default InformationOfExchangeScreen;
