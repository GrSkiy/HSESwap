import React, { Component } from "react";
import { Text, View } from "react-native";

let info;

class GetExchangeMinors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      loading: true,
    };
  }
  async componentDidMount() {
    const url = "http://localhost:3000/api/v1/exchange_minors";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
  }
  render() {
    return (
      // {console.log(this.state.data)}
      // (console.log(this.state),
      <View>
        {this.state.loading ? (
          <Text>Loading</Text>
        ) : (
          ((<MyContext.Provider value={this.state.data} />),
          console.log(this.state.data))
        )}
      </View>
    );
  }
}
class GetAllMinors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      loading: true,
    };
  }
  async componentDidMount() {
    const url = "http://localhost:3000/api/v1/minors";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
  }
  render() {
    return (
      // {console.log(this.state.data)}
      // (console.log(this.state),
      <View>
        {this.state.loading ? (
          <Text>Loading</Text>
        ) : (
          ((<MyContext.Provider value={this.state.data} />),
          console.log(this.state.data))
        )}
      </View>
    );
  }
}
// (info = this.state.data))

const MyContext = React.createContext(GetExchangeMinors);

export { GetExchangeMinors, MyContext, GetAllMinors };
