import React from "react";
import { Animated, View, Text, Dimensions } from "react-native";
import { Button } from "native-base";
import _smallComponentAnimation from "../../animations/smallAnimation";
import _suckUpAnimation from "../../animations/suckUpAnimation";
import _spitOutAnimation from "../../animations/spitOutAnimation";
import TextX from "../AnimatedTextGenerator";
import _switchPageAnimation from "../../animations/switchPageAnimation";
let { width } = Dimensions.get("window");
export default class PageSwitchButton extends React.Component {
  render() {
    return (
      <Animated.View
        style={{
          backgroundColor: this.props.buttonColor,
          borderTopLeftRadius: 50,
          height: 70,
          width: width,
          borderTopRightRadius: 50
        }}
      >
        <Button
          full
          style={{
            backgroundColor: "transparent",
            borderTopLeftRadius: 50,
            height: 70,
            borderTopRightRadius: 50
          }}
          disabled={this.props.buttonDisabled}
          onPress={() => {
            _switchPageAnimation(
              this.props.setDisabledTrue,
              this.props.widthMainView,
              this.props.heightMainView,
              this.props.opacityMainView,
              this.props.dimensionsLg,
              this.props.dimensionsSm,
              this.props.opacityDecor,
              this.props.buttonHeight,
              this.props.setDisabledFalseAndRegToogle
            );
          }}
        >
          <Text
            style={{
              color: "white",
              marginTop: "-4%"
            }}
          >
            {this.props.show2ndPage ? (
              <TextX
                position={this.props.page1TextStateVal}
                rotation={[]}
                text={this.props.page1Text}
              />
            ) : (
              <TextX
                position={this.props.page2TextStateVal}
                rotation={[]}
                text={this.props.page2Text}
              />
            )}
          </Text>
        </Button>
      </Animated.View>
    );
  }
}
