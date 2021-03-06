//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export default class MinorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    const url = this.props.navigation.getParam("url");
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
    console.log(this.state.data);
  }

  renderContent = () => {
    let {
      handleReadMore,
      name,
      credits,
      address,
      responsible,
      minorDescription,
    } = this.state.data;
    return (
      <View style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text style={styles.headerMinor}>Название майнора</Text>
          <Text style={styles.minorName}>{name}</Text>
        </View>
        <View style={styles.creditAddresssContainer}>
          <View style={styles.creditsContainer}>
            <Text style={styles.headerCredits}>Кредиты</Text>
            <Text style={styles.credits}>{credits}</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.header}>Адрес</Text>
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Ответственный за майнор</Text>
          <Text style={styles.head}>{responsible}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.header}>Описание майнора</Text>
          <Text style={styles.description}>{minorDescription}</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log(";handleReadMore")}
          style={styles.reedMoreContainer}
        >
          <Text style={styles.readMoreText}>Читать дальше</Text>
          <Image
            style={styles.readMoreLink}
            source={require("../../assets/png/readMoreLink2x.png")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <SafeAreaView style={styles.safeArea}>
        {this.renderContent()}
      </SafeAreaView>
    );
  }
}

MinorScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Все майноры",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={"filter"}
        onPress={() => navigation.push("Filter")}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
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

  descriptionContainer: {
    marginBottom: 12,
  },

  header: {
    color: "#005AAB",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 12,
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
    height: "100%",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    paddingBottom: Platform.OS === "ios" ? 180 : 44,
  },

  minorName: {
    fontSize: 18,
    fontWeight: "500",
  },

  creditAddresssContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },

  credits: {
    fontSize: 22,
  },

  addressContainer: {
    marginLeft: 36,
  },
});
