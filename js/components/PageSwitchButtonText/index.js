import React from "react";
import { View, Animated, Text } from "react-native";
export default class TextX extends React.Component {
  _renderLetters() {
    let letters = [];
    for (let i = 0; i < this.props.text.length; i++)
      letters.push(
        <Animated.Text
          style={{
            color: "#fff",
            fontSize: 20,
            transform: [{ translateY: this.props.position[i] }]
          }}
          key={i}
        >
          {this.props.text.charAt(i)}
        </Animated.Text>
      );
    return letters;
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          marginTop: "35%"
        }}
      >
        {this._renderLetters()}
      </View>
    );
  }
}
