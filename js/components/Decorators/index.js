import React from "react";
import { View, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");
import Decorator from "../Decorator";
let decorators = [];
export default class Decorators extends React.Component {
  constructor(props) {
    super(props);
    this._renderDecorators();
  }
  _renderDecorators() {
    decorators = [];
    for (let i = 0; i < this.props.decorStateVal.length; i++) {
      decorators.push(
        <Decorator
          color={
            i < this.props.lgDecorColor.length
              ? this.props.lgDecorColor[i]
              : this.props.smDecorColor
          }
          key={i}
          borderRadius={i < this.props.lgDecorColor.length ? 225 : 25}
          width={
            i < this.props.lgDecorColor.length
              ? this.props.dimensionsLg
              : this.props.dimensionsSm
          }
          height={
            i < this.props.lgDecorColor.length
              ? this.props.dimensionsLg
              : this.props.dimensionsSm
          }
          opacity={Math.random() * (0.6 - 0.3) + 0.3}
          translateY={this.props.decorStateVal[i].Y}
          translateX={this.props.decorStateVal[i].X}
        />
      );
    }
  }
  render() {
    return (
      <View
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          width: width,
          height: height
        }}
      >
        {decorators}
      </View>
    );
  }
}
