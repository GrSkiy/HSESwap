import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

export default function SmallNumberInput({
  marginBottom,
  lableText,
  placeholder,
  setText,
  style,
  field,
}) {
  return (
    <View style={(styles.container, style)}>
      <Text style={styles.lable}>{lableText}</Text>
      <View style={styles.componentsWhisIcon}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setText(field, value)}
          // value={}
          placeholder={placeholder}
          placeholderTextColor="#979797"
        />
      </View>
    </View>
  );
}

// export default class Container extends Component {
//   constructor(props) {
//     super(props)
//   }
//
//   handleOnChangeText (id, value) => {
//     let nextSettings = []
//
//     this.state.settings.forEach(setting => {
//       if (setting.name == id) {
//         let nextSetting = {
//           name: setting.name,
//           value: value
//         }
//
//         nextSettings.push(nextSetting)
//       } else {
//         nextSettings.push(setting)
//       }
//     })
//
//     this.setState({
//       setting: nextSettings
//     })
//   }
//
//   render() {
//     return <Button id={id} handleClick={this.handleClick} />
//   }
// }
//
// export default class Input extends PureComponent {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     const { id, text, handleOnChangeText } = this.props
//
//     return <input onChangeText={() => handleOnChangeText(id, value)} value={text} />
//   }
// }

const styles = StyleSheet.create({
  input: {
    color: "#000",
    width: "100%",
    paddingLeft: 20,
    height: 48,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,

    elevation: 11,
    borderRadius: 10,
  },
  componentsWhisIcon: {
    flexDirection: "row",
    //  width: 150,
  },

  searchIcon: {
    padding: 10,
  },
  lable: {
    marginBottom: 12,
    color: "#005AAB",
    fontWeight: "bold",
    fontSize: 12,
  },
  container: {},
});
