import React from "react";
import { Animated, View } from "react-native";
export default class Decorator extends React.Component {
  render() {
    return (
      <Animated.View
        style={{
          backgroundColor: this.props.color,
          borderRadius: this.props.borderRadius,
          width: this.props.width,
          height: this.props.height,
          position: "absolute",
          opacity: this.props.opacity,
          top: this.props.top,
          left: this.props.left,
          transform: [
            { translateY: this.props.translateY },
            { translateX: this.props.translateX }
          ]
        }}
      />
    );
  }
}
