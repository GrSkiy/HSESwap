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
} from "react-native";
import Navbar from "../components/Navbar";
import MainButton from "../components/MainButton";
import LargeInput from "../components/LargeInput";
import LargeSelect from "../components/LargeSelect";

const SignInScreen = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Navbar
        style={styles.navbarAdd}
        title={"Регистрация"}
        // handleBack={() => props.changePage(1)}
      />
      <View style={styles.safeAreaContainer}>
        <View style={styles.inputContainer}>
          <LargeInput
            style={styles.signInInput}
            lableText="Фамилия"
            placeholder="Введите вашу фамилию"
            setText={() => Alert.alert("Simple Button pressed")}
          />
          <LargeInput
            style={styles.signInInput}
            lableText="Имя"
            placeholder="Введите ваше имя"
            setText={() => Alert.alert("Simple Button pressed")}
          />
          <LargeInput
            style={styles.signInInput}
            lableText="Отчество"
            placeholder="Введите ваше отчество, если имеется "
            setText={() => Alert.alert("Simple Button pressed")}
          />
          <LargeInput
            style={styles.signInInput}
            lableText="Корпоративная почта hse"
            placeholder="Введите адрес почты"
            setText={() => Alert.alert("Simple Button pressed")}
          />
          <LargeSelect
            style={styles.signInInput}
            lableText="Ваш кампус"
            placeholder="Выберите свой кампус"
            handlePress={() => {
              console.log(1);
            }}
          />
          <LargeSelect
            style={styles.signInInput}
            lableText="Ваш майнор"
            placeholder="Выберите свой текущий майнор"
            handlePress={() => {
              console.log(1);
            }}
          />
        </View>

        <View style={styles.mainButton}>
          <MainButton title="Далее" onPress={mainButtonHandle} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%",

    display: "flex",
    justifyContent: "space-between",
    paddingBottom: Platform.OS === "ios" ? 180 : 44,
  },
  signInInput: {
    marginBottom: 20,
  },
  mainButton: {
    alignItems: "center",
    marginTop: 55,
  },
  inputContainer: {},

  navbarAdd: {
    marginBottom: 20,
  },
});

export default SignInScreen;
