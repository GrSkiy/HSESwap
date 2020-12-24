import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Navbar({
  title,
  backTitle,
  handleChange,
  changeTitle,
  handleBack,
}) {
  return (
    <View style={styles.navbar}>
      <View style={styles.navbarContainer}>
        <TouchableOpacity style={styles.handleContainer} onPress={handleBack}>
          <Image
            style={styles.backArrow}
            source={require("../../assets/png/navbarBackIOS3x.png")}
          />
          <Text style={styles.backTitle}>{backTitle}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity onPress={handleChange}>
          <Text style={styles.backTitle}>{changeTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 55,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backArrow: {
    width: 8,
    height: 17,
  },
  backTitle: {
    marginLeft: 6,
    fontSize: 16,
    color: "#005AAB",
  },
  text: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  handleContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
