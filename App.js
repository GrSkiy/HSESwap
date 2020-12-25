import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import FiltersScreen from "./src/screens/FiltersScreen";
import { AppLoading } from "expo";
import LogInScreen from "./src/screens/LogInScreen";
import MinorScreen from "./src/screens/MinorScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ExchangeDescriptionScreen from "./src/screens/ExchangeDescriptionScreen";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <ExchangeDescriptionScreen
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
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
  },
});

export default App;
