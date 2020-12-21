import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import MyComponentTextInput from "../components/TextInput";
import Navbar from "../components/Navbar";
import LinkButton from "../components/LinkButton";
import MainButton from "../components/MainButton";

export default function SingIn() {
  return (
    <View>
      <Navbar title="Вход" />
      <View style={styles.containerSingIn}>
        <Text style={styles.title}>
          Введите свою корпоративную почту чтобы войти
        </Text>
        <MyComponentTextInput lableText="Почта hse" value="Почта hse" />
        <LinkButton
          title="Зарегистрироваться"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
        <MainButton
          title="Далее"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSingIn: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginBottom: 40,
    marginTop: 200,
    color: "#0D407B",
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    fontSize: 12,
  },
});
