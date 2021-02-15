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
  Alert,
} from "react-native";
import MainButton from "../components/MainButton";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

const showAlert = (changePage) => {
  return Alert.alert(
    "Открой все возможности",
    "Чтобы иметь возможность обмениваться и изменять настройки фильтров войди или зарегестрируйся",
    [
      {
        text: "Вход",
        onPress: () => changePage(5),
        style: "cancel",
      },
      {
        text: "Регистрация",
        onPress: () => changePage(6),
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};

class ExchangeDescriptionScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const url = this.props.navigation.getParam("url");
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
  }

  // let suitsText = "";
  //
  // if (suits) {
  //   suitsText = "Студент хочет твой майнор!";
  // } else {
  //   let suitsText = "";
  // }

  renderContent = () => {
    const {
      handleReadMore,
      minor,
      credits,
      address,
      responsible,
      description,
      suits,
      mainButtonHandle,
      url,
    } = this.state.data;
    return (
      <View style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text style={styles.headerMinor}>Название майнора</Text>
          <Text style={styles.minorName}>{minor}</Text>
        </View>
        <View style={styles.creditAdressContainer}>
          <View style={styles.creditsContainer}>
            <Text style={styles.headerCredits}>Кредиты</Text>
            <Text style={styles.credits}>{credits}</Text>
          </View>
          <View style={styles.adressContainer}>
            <Text style={styles.header}>Адрес</Text>
            <Text style={styles.adress}>{address}</Text>
          </View>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Ответственный за майнор</Text>
          <Text style={styles.head}>{responsible}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.header}>Описание майнора</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity
          onPress={handleReadMore}
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
    // <View style={styles.suitsContainer}>
    //   <Text style={styles.suitsText}>{suitsText}</Text>
    // </View>
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <SafeAreaView style={styles.safeArea}>
        {this.renderContent()}
        <View style={styles.mainButton}>
          <MainButton
            title="Обменяться"
            onPress={() => this.props.navigation.push("SuccessExchange")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

ExchangeDescriptionScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Объявление обмена",
});

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    justifyContent: "space-between",
  },
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

  headerContainer: {
    marginBottom: 20,
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

  mainButton: {
    // alignItems: "center",
    // justifyContent: "center",
    // position: "absolute",
    marginBottom: 30,
    // left: Platform.OS === "ios" ? 134 : 100,
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
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },

  minorName: {
    fontSize: 18,
    fontWeight: "500",
  },
  suitsText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#005AAB",
  },

  suitsContainer: {
    marginTop: 4,
    marginBottom: 10,
  },

  creditAdressContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },

  credits: {
    fontSize: 22,
  },

  adressContainer: {
    marginLeft: 36,
  },
});

export default ExchangeDescriptionScreen;
