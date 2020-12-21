import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MinorScreen from "./src/screens/MinorScreen";
import ExchangeScreen from "./src/screens/ExchangeScreen";

export default function App() {
  return (
    <MinorScreen
      myMinorName="Советская и постсоветская культура: политики, практики, конфликты"
      myMinorCredits="99"
      myMinorAdress="Ул. Старая Басманная, д. 21/4, стр. 3"
      myMinorHead="Наринская Екатерина Владимировна"
      myMinorDescription="Древний Восток – родина первых в истории человечества систем письма. В этом обширном ареале, включающем (в широком смысле) Ближний Восток, а также Восточную и Юго-восточную Азию, начиная с конца IV – начала III тысячелетия, сформировалось несколько самостоятельных письменных систем. Часть из них имеет словесно-слоговую природу (клинопись, использовавшаяся в Месопотамии и сопредельных регионах на протяжении более трех тысячелетий, а также египетская и китайская иероглифика)."
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
