import React from "react";
import { View, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");
import Decorator from "../Decorator";
export default class Decorators extends React.Component {
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
        <Decorator
          color={this.props.showRegistrationPage ? "#49f32b" : "orange"}
          borderRadius={225}
          width={this.props.widthLg}
          height={this.props.heightLg}
          opacity={this.props.opacityDecor}
          top={0}
          left={0}
          translateY={this.props.decorLg1Y}
          translateX={this.props.decorLg1X}
        />
        <Decorator
          color={this.props.showRegistrationPage ? "#7d18f2" : "#ff0000"}
          borderRadius={225}
          width={this.props.widthLg}
          height={this.props.heightLg}
          opacity={this.props.opacityDecor}
          top={400}
          left={100}
          translateY={this.props.decorLg2Y}
          translateX={this.props.decorLg2X}
        />
        <Decorator
          color="#ccc"
          borderRadius={25}
          width={this.props.widthSm}
          height={this.props.heightSm}
          opacity={this.props.opacityDecor}
          top={470}
          left={10}
          translateY={this.props.decorSm1Y}
          translateX={this.props.decorSm1X}
        />
        <Decorator
          color="#ccc"
          borderRadius={25}
          width={this.props.widthSm}
          height={this.props.heightSm}
          opacity={this.props.opacityDecor}
          top={510}
          left={349}
          translateY={this.props.decorSm2Y}
          translateX={this.props.decorSm2X}
        />
        <Decorator
          color="#ccc"
          borderRadius={25}
          width={this.props.widthSm}
          height={this.props.heightSm}
          opacity={this.props.opacityDecor}
          top={70}
          left={80}
          translateY={this.props.decorSm3Y}
          translateX={this.props.decorSm3X}
        />
        <Decorator
          color="#ccc"
          borderRadius={25}
          width={this.props.widthSm}
          height={this.props.heightSm}
          opacity={this.props.opacityDecor}
          top={150}
          left={259}
          translateY={this.props.decorSm4Y}
          translateX={this.props.decorSm4X}
        />
      </View>
    );
  }
}
