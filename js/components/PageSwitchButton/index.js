import React from "react";
import { Animated, View, Text, Dimensions } from "react-native";
import { Button } from "native-base";
import _smallComponentAnimation from "../../animations/smallAnimation";
import _suckUpAnimation from "../../animations/suckUpAnimation";
import _spitOutAnimation from "../../animations/spitOutAnimation";
import TextX from "../PageSwitchButtonText";
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
          disabled={this.props.buttonDiabled}
          onPress={() => {
            this.props.setDisabledTrue();
            _smallComponentAnimation(
              this.props.buttonHeight,
              70,
              400
            ).start(() => {
              _suckUpAnimation(
                this.props.widthMainView,
                this.props.heightMainView,
                this.props.opacityMainView,
                this.props.widthLg,
                this.props.heightLg,
                this.props.widthSm,
                this.props.heightSm,
                this.props.opacityDecor
              ).start(() => {
                _smallComponentAnimation(
                  this.props.buttonHeight,
                  50,
                  400
                ).start();
                this.props.setDisabledFalseAndRegToogle();
                _spitOutAnimation(
                  this.props.widthMainView,
                  this.props.heightMainView,
                  this.props.opacityMainView,
                  this.props.widthLg,
                  this.props.heightLg,
                  this.props.widthSm,
                  this.props.heightSm,
                  this.props.opacityDecor
                ).start();
              });
            });
          }}
        >
          <Text
            style={{
              color: "white",
              marginTop: "-4%"
            }}
          >
            {this.props.showRegistrationPage ? (
              <TextX
                position={[
                  this.props.positionL,
                  this.props.positionO,
                  this.props.positionG,
                  this.props.positionI,
                  this.props.positionN
                ]}
                text="Login"
              />
            ) : (
              <TextX
                position={[
                  this.props.positionR,
                  this.props.positionE,
                  this.props.positionRG,
                  this.props.positionRI,
                  this.props.positionS,
                  this.props.positionT,
                  this.props.positionRE,
                  this.props.positionRR
                ]}
                text="Register"
              />
            )}
          </Text>
        </Button>
      </Animated.View>
    );
  }
}
