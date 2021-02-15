import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Icon,
  View,
  Alert,
  Platform,
  Image,
} from "react-native";
import SmallNumberInput from "../components/SmallNumberInput";
import MainButton from "../components/MainButton";
import Constants from "expo-constants";
import MediumSelect from "../components/MediumSelect";
import LargeSelect from "../components/LargeSelect";

export default function FiltersScreen() {
  // <View style={styles.changeMinor}>
  //   <LargeSelect
  //     lableText="Твой майнор"
  //     placeholder="Твой майнор"
  //     handlePress={() => {
  //       console.log(1);
  //     }}
  //   />
  // </View>

  // <View style={styles.changeMinor}>
  //   <LargeSelect
  //     lableText="Куда хочешь?"
  //     placeholder="Выбери свой майнор"
  //     handlePress={() => {
  //       console.log(1);
  //     }}
  //   />
  // </View>
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeAreaContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.homeIndicator}
            source={require("../../assets/svg/homeIndicator.svg")}
          />
        </View>

        <View style={styles.filterMainContainer}>
          <View style={styles.filterSubContainer}>
            <View style={styles.viewContainer}>
              <View style={styles.myCourse}>
                <SmallNumberInput
                  lableText="Курс"
                  placeholder="Курс"
                  setText={() => Alert.alert("Simple Button pressed")}
                />
              </View>
              <View style={styles.myBuilding}>
                <MediumSelect
                  lableText="Кампус"
                  placeholder="Кампус"
                  handlePress={() => {
                    console.log(1);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.mainButton}>
            <MainButton
              title="Применить"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    // marginTop: Constants.statusBarHeight,
    // height: "100%",
  },
  safeAreaContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    // height: "100%",
    // display: "flex",
    // alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: Platform.OS === "ios" ? 80 : 44,
  },

  viewContainer: {
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 20,
  },

  myCourse: {},
  pageTag: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  myBuilding: {
    marginLeft: 12,
    width: "90.3%",
  },

  homeIndicator: {
    width: 36,
    height: 4,
  },

  imgContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  changeMinor: {
    marginBottom: Platform.OS === "ios" ? 10 : 20,
  },

  mainButton: {
    display: "flex",
    alignItems: "center",
  },
  filterMainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});
