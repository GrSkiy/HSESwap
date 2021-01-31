import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { AppLoading } from "expo";
import { AppNavigation } from "./src/navigation/AppNavigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageId: 0,
    };
  }

  // changePage = (page) => {
  //   this.setState({ pageId: page });
  // };

  renderPage = () => {
    const { pageId } = this.state;
    if (pageId === 0) {
      return <MainScreen changePage={this.changePage} />;
    } else if (pageId === 1) {
      return <MenuScreen changePage={this.changePage} />;
    } else if (pageId === 2) {
      return <SettingsScreen changePage={this.changePage} />;
    } else if (pageId === 2.1) {
      return <Setting_myData_view changePage={this.changePage} />;
    } else if (pageId === 2.11) {
      return <Setting_myData_change changePage={this.changePage} />;
    } else if (pageId === 2.2) {
      return <Setting_sosialNetworcs_view changePage={this.changePage} />;
    } else if (pageId === 2.21) {
      return <Setting_sosialNetworcs_change changePage={this.changePage} />;
    } else if (pageId === 2.3) {
      return <AllMinorsScreen changePage={this.changePage} />;
    } else if (pageId === 2.4) {
      return <AllMinorsScreen changePage={this.changePage} />;
    } else if (pageId === 2.5) {
      return <AllMinorsScreen changePage={this.changePage} />;
    } else if (pageId === 3) {
      return <AllMinorsScreen changePage={this.changePage} />;
    } else if (pageId === 3) {
      return (
        <ExchangeDescriptionScreen
          changePage={this.changePage}
          name={
            "Советская и постсоветская культура: политики, практики, конфликты"
          }
          credits={"99"}
          adress={"Ул. Старая Басманная, д. 21/4, стр. 3"}
          head={"Наринская Екатерина Владимировна"}
          description={
            "Древний Восток – родина первых в истории человечества систем письма. В этом обширном ареале, включающем (в широком смысле) Ближний Восток, а также Восточную и Юго-восточную Азию, начиная с конца IV – начала III тысячелетия, сформировалось несколько самостоятельных письменных систем. Часть из них имеет словесно-слоговую природу (клинопись, использовавшаяся в Месопотамии и сопредельных регионах на протяжении более трех тысячелетий, а также египетская и китайская иероглифика."
          }
          handleReadMore={() => {
            console.log(1);
          }}
          suits={true}
          mainButtonHandle={() => console.log(2)}
        />
      );
    } else if (pageId === 4) {
      return (
        <MinorScreen
          name={
            "Советская и постсоветская культура: политики, практики, конфликты"
          }
          credits={"99"}
          adress={"Ул. Старая Басманная, д. 21/4, стр. 3"}
          head={"Наринская Екатерина Владимировна"}
          description={
            "Древний Восток – родина первых в истории человечества систем письма. В этом обширном ареале, включающем (в широком смысле) Ближний Восток, а также Восточную и Юго-восточную Азию, начиная с конца IV – начала III тысячелетия, сформировалось несколько самостоятельных письменных систем. Часть из них имеет словесно-слоговую природу (клинопись, использовавшаяся в Месопотамии и сопредельных регионах на протяжении более трех тысячелетий, а также египетская и китайская иероглифика."
          }
          handleReadMore={() => {
            console.log(1);
          }}
          changePage={this.changePage}
        />
      );
    } else if (pageId === 5) {
      return <LogInScreen changePage={this.changePage} />;
    } else if (pageId === 6) {
      return <SignInScreen changePage={this.changePage} />;
    } else if (pageId === 7) {
      return <EmailVerificationScreen changePage={this.changePage} />;
    } else if (pageId === 8) {
      return <SuccessExchangeScreen changePage={this.changePage} />;
    }
  };

  render() {
    // {this.renderPage()}
    return (
      <View style={styles.appContainer}>
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
    backgroundColor: "#fff",
  },
});
