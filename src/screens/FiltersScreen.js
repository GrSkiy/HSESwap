import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Icon,
  View,
  Alert,
  Platform,
  Image,
} from "react-native";
import SmallNumberInput from "../components/SmallNumberInput";
import MainButton from "../components/MainButton";
import Constants from "expo-constants";
import LargeSelect from "../components/LargeSelect";

import PickerDesign from "../components/Picker";
import LargeInput from "../components/LargeInput";

export default class FiltersScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const url = "http://localhost:3000/api/v1/filters";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
    console.log(this.state);
  }

  handleChange = (id, name, field) => {
    let data = this.state;
    console.log(id, name, field);
    if (field == "year") {
      data.data.filters_data.year = parseInt(name);
    } else if (field == "city") {
      data.data.filters_data.city_id = id + 1;
      data.data.filters_data.city_name = name;
    }
    this.setState(data);
  };

  confirmation = async () => {
    let data = {
      action: this.state.data.filters_data.action,
      filters_data: {
        city_id: this.state.data.filters_data.city_id,
        year: this.state.data.filters_data.year,
        profile_id: this.state.data.filters_data.profile_id,
      },
    };
    console.log(data);
    await fetch(this.state.data.filters_data.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    this.props.navigation.goBack();
  };

  renderInputs = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.safeAreaContainer}>
          <View style={styles.filterMainContainer}>
            <View style={styles.filterSubContainer}>
              <View style={styles.viewContainer}>
                <View style={styles.myCourse}></View>
                <View style={styles.myBuilding}>
                  <PickerDesign
                    items={[{ city_name: 2 }, { city_name: 3 }]}
                    current={this.state.data.filters_data.year}
                    field="year"
                    handleChange={this.handleChange}
                  />
                  <PickerDesign
                    items={this.state.data.all_cities}
                    current={this.state.data.filters_data.city_name}
                    field="city"
                    handleChange={this.handleChange}
                  />
                </View>
              </View>
            </View>

            <View style={styles.mainButton}>
              <MainButton title="Применить" onPress={this.confirmation} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  render() {
    return this.state.loading ? (
      <Text>Loading...</Text>
    ) : (
      <View style={styles.opacityLayer}>{this.renderInputs()}</View>
    );
  }
}

const styles = StyleSheet.create({
  opacityLayer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: "100%",
    justifyContent: "flex-end",
  },
  safeAreaContainer: {
    backgroundColor: "red",
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
