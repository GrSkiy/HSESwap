import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import MainButton from "../components/MainButton";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

class UsersExchangesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const url = "http://localhost:3000/api/v1/exchange_requests";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
    console.log(this.state.data.profile_id);
  }

  render_exshanges = (exshanges) => {
    let items = [];
    console.log(exshanges);
    exshanges.forEach((exshange, i) => {
      items.push(
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Chat", {
              url: exshange.url,
              profile_id: this.state.data.profile_id,
            })
          }
          key={i}
        >
          <Text>{exshange.responder_minor_name}</Text>
          <Text>{exshange.responder_name}</Text>
        </TouchableOpacity>
      );
    });

    return items;
  };

  render() {
    return this.state.loading ? (
      <Text> Loading ...</Text>
    ) : (
      <ScrollView contentContainerStyle={styles.list}>
        {this.render_exshanges(this.state.data.requests_for_profile_data)}
        {this.render_exshanges(this.state.data.requests_from_profile_data)}
      </ScrollView>
    );
  }
}

UsersExchangesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Мои обмены",
});

export default UsersExchangesScreen;

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 60,
  },
});
