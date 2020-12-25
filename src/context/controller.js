import React from "react";

import MainScreen from "../screens/MainScreen";
import MenuScreen from "../screens/MenuScreen";
import AllMinorsScreen from "../screens/AllMinorsScreen";

import LogInScreen from "../screens/LogInScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Setting_myData_view from "../screens/Setting_myData_view";
import Setting_sosialNetworcs_view from "../screens/Setting_sosialNetworcs_view";
import Setting_sosialNetworcs_change from "../screens/Setting_sosialNetworcs_change";
import Setting_myData_change from "../screens/Setting_myData_change";
import SuccessExchangeScreen from "../screens/SuccessExchangeScreen";

const changeScreens = () => {
  if (pageId === 0) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <MainScreen changePage={this.changePage} />
      </SafeAreaView>
    );
  } else if (pageId === 1) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <MenuScreen changePage={this.changePage} />
      </SafeAreaView>
    );
  } else if (pageId === 2) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <SettingsScreen changePage={this.changePage} />
      </SafeAreaView>
    );
  } else if (pageId === 3) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <AllMinorsScreen changePage={this.changePage} />
      </SafeAreaView>
    );
  }
};

const ChangePage = React.createContext(changeScreens);

export default ChangePage;
