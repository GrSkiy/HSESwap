import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Icon,
  View,
  Alert,
} from "react-native";
import MyComponentTextInput from "../components/TextInput";
import MainButton from "../components/MainButton";
import Constants from "expo-constants";

export default function FiltersScreen() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <Text>Фильтры</Text>
        <View style={styles.viewContainer}>
          <View style={styles.myCourse}>
            <MyComponentTextInput
              lableText="Курс"
              value="Курс"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          </View>
          <View style={styles.myBuilding}>
            <MyComponentTextInput
              lableText="Кампус"
              value="Кампус"
              onPress={() => Alert.alert("Simple Button pressed")}
              name="caret-down-circle"
            />
          </View>
        </View>
        <View style={styles.changeMinor}>
          <MyComponentTextInput
            lableText="Твой майнор"
            value="Твой майнор"
            onPress={() => Alert.alert("Simple Button pressed")}
            name="caret-down-circle"
          />
          <MyComponentTextInput
            lableText="Куда хочешь?"
            value="Куда хочешь?"
            onPress={() => Alert.alert("Simple Button pressed")}
            name="caret-down-circle"
          />
        </View>
        <MainButton
          title="Применить"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    marginTop: Constants.statusBarHeight,
  },
  scrollViewContainer: {
    marginHorizontal: 20,
    height: 1000,
    //marginVertical: 300,
  },

  viewContainer: {
    marginTop: 20,
    flexDirection: "row",
  },

  myCourse: {
    width: 100,
    paddingRight: 20,
  },
  myBuilding: {
    width: 270,
  },
});
