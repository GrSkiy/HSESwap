import React, { useContext } from "react";
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

export default function LogInScreen({ mainButtonHandle }) {
  return (
    <View style={styles.safeAreaContainer}>
      <View style={styles.navbarContainer}>
        <Navbar title="Вход" />
      </View>

      <View style={styles.containerLogIn}>
        <View style={styles.actionContainer}>
          <Text style={styles.title}>
            Введите свою корпоративную почту чтобы войти
          </Text>

          <LargeInput
            lableText="Почта hse"
            placeholder="Почта hse"
            setText={() => Alert.alert("Simple Button pressed")}
          />

          <LinkButton
            title="Зарегистрироваться"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
        <View style={styles.mainButton}>
          <MainButton title="Войти" onPress={mainButtonHandle} />
        </View>
      </View>
    </View>
  );
}

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
