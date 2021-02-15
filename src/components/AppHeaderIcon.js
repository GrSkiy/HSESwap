import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={Platform.OS === "android" ? SimpleLineIcons : Ionicons}
    color={"#005aab"}
  />
);
