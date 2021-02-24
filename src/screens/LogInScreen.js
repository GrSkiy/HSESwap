import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import SmallNumberInput from "../components/SmallNumberInput";
import Navbar from "../components/Navbar";
import LinkButton from "../components/LinkButton";
import MainButton from "../components/MainButton";
import LargeInput from "../components/LargeInput";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export default function LogInScreen({ mainButtonHandle, navigation }) {
  const [email, setEmail] = useState("");

  const login = async () => {
    await fetch(`http://127.0.0.1:3000/api/v1/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    return navigation.push("EmailVerification");
  };

  return (
    <View style={styles.safeAreaContainer}>
      <View style={styles.containerLogIn}>
        <View style={styles.actionContainer}>
          <Text style={styles.title}>
            Введите свою корпоративную почту чтобы войти
          </Text>

          <LargeInput
            lableText="Почта hse"
            placeholder="Почта hse"
            setText={setEmail}
          />
        </View>
        <View style={styles.mainButton}>
          <MainButton title="Войти" onPress={login} />
        </View>
      </View>
    </View>
  );
}

LogInScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Вход",
});

const styles = StyleSheet.create({
  containerLogIn: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },

  title: {
    marginBottom: 40,
    marginTop: 200,
    color: "#015EB1",
    fontWeight: "bold",
    fontSize: 24,
    width: 240,
  },

  gradientImage: {
    resizeMode: "contain",
    height: 400,
  },

  navbarContainer: {},

  safeAreaContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    paddingBottom: Platform.OS === "ios" ? 180 : 44,
  },

  mainButton: {
    display: "flex",
    alignItems: "center",
  },

  button: {
    marginTop: 20,
    fontSize: 12,
  },
});
