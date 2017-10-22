import React from "react";
import { Image, StatusBar, Text, Animated, Dimensions } from "react-native";
import _stopAllLetterAnimation from "../../animations/stopAllLetterAnimations.js";
import { Container, Content, View } from "native-base";
import _smallAnimation from "../../animations/smallAnimation";
import AnimatedTextGenerator from "../../components/AnimatedTextGenerator";
import _mirrorBreakAnimation from "../../animations/mirrorBreakAnimation";
import _mirrorShatterAnimation from "../../animations/mirrorShatterAnimation";
import _dramaticAppearanceAnimation from "../../animations/dramaticApperanceAnimation";
import _upDownRepeatAnimation from "../../animations/upDownRepeatAnimations";
let { width, height } = Dimensions.get("window");
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    for (let i = 1; i <= 7; i++) {
      let x = "textLetter" + i + "X";
      let y = "textLetter" + i + "Y";
      this.state[x] = new Animated.Value(0);
      this.state[y] = new Animated.Value(0);
    }
    this.position = [];
    for (let i = 1; i <= 7; i++) {
      let x = "textLetter" + i + "X";
      let y = "textLetter" + i + "Y";
      this.position.push({ X: this.state[x], Y: this.state[y] });
    }
    this.mirrorShatterDestination = [
      { X: -width, Y: 70 },
      { X: -100, Y: height },
      { X: 50, Y: height },
      { X: 25, Y: height },
      { X: -20, Y: height },
      { X: 100, Y: height },
      { X: width, Y: 80 }
    ];
    this.mirrorShatterDuration = [
      { X: 500, Y: 400 },
      { X: 400, Y: 700 },
      { X: 300, Y: 600 },
      { X: 100, Y: 500 },
      { X: 150, Y: 550 },
      { X: 400, Y: 600 },
      { X: 500, Y: 350 }
    ];
  }
  componentDidMount() {
    _upDownRepeatAnimation(this.state.instructionY);
    _dramaticAppearanceAnimation(
      this.state.welcomeOpacity,
      this.state.geekOpacity,
      this.state.instructionOpacity
    );
  }
  state = {
    count: 1,
    instrutction: "Tap on the <Geek/> logo",
    welcomeOpacity: new Animated.Value(0),
    geekOpacity: new Animated.Value(0),
    logoOpacity: new Animated.Value(0),
    textLetterRotation: new Animated.Value(0),
    disabled: false,
    instructionOpacity: new Animated.Value(0),
    instructionY: new Animated.Value(0),
    mainViewX: new Animated.Value(0),
    mainViewY: new Animated.Value(0),
    continueloopAnimation: true
  };

  _animHandler() {
    this.setState({ disabled: true });
    switch (this.state.count) {
      case 1:
        _mirrorBreakAnimation(
          () => {
            this.setState({
              disabled: false,
              count: this.state.count + 1,
              instrutction: "Oops you broke it, Tap again to clean up"
            });
          },
          this.state.textLetterRotation,
          this.state.instructionOpacity,
          this.state.mainViewX,
          this.state.mainViewY
        );
        break;
      case 2:
        _mirrorShatterAnimation(
          this.position,
          this.mirrorShatterDestination,
          this.mirrorShatterDuration,
          () => {
            this.setState({
              count: this.state.count + 1,
              instrutction: "Now thats how we roll !!!!!"
            });
          },
          this.state.mainViewX,
          this.state.mainViewY,
          this.state.logoOpacity,
          this.state.instructionOpacity,
          this.state.textLetterRotation
        );
        break;
    }
  }
  render() {
    const letterRotation = this.state.textLetterRotation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const letterAntiRotation = this.state.textLetterRotation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "-360deg"]
    });
    return (
      <Container
        style={{
          backgroundColor: "rgba(26, 26, 26, 1)",
          padding: "5%",
          paddingTop: "50%"
        }}
      >
        <StatusBar barStyle="light-content" />
        <Animated.View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            transform: [
              { translateX: this.state.mainViewX },
              { translateY: this.state.mainViewY }
            ]
          }}
        >
          <Animated.Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: "#fff",
              opacity: this.state.welcomeOpacity,
              marginBottom: "15%"
            }}
          >
            Welcome
          </Animated.Text>
          <Animated.Image
            source={require("../../../Assets/logo-icon-lg.png")}
            style={{
              width: 100,
              height: 100,
              position: "absolute",
              opacity: this.state.logoOpacity
            }}
            resizeMethod="auto"
            resizeMode="contain"
          />
          <Animated.View
            style={{
              flexDirection: "row",
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              opacity: this.state.geekOpacity
            }}
          >
            <AnimatedTextGenerator
              text="<Geek/>"
              disabled={this.state.disabled}
              position={this.position}
              rotation={[
                letterRotation,
                letterAntiRotation,
                letterRotation,
                letterAntiRotation,
                letterRotation,
                letterAntiRotation,
                letterRotation
              ]}
              extraStyle={{
                fontSize: 42,
                color: "orange",
                textShadowColor: "orange",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 15,
                paddingTop: 50,
                paddingBottom: 50
              }}
              onPress={this._animHandler.bind(this)}
            />
          </Animated.View>
        </Animated.View>
        <Animated.Text
          style={{
            color: "#fff",
            opacity: this.state.instructionOpacity,
            transform: [{ translateY: this.state.instructionY }],
            alignSelf: "center",
            marginTop: "5%"
          }}
        >
          {this.state.instrutction}
        </Animated.Text>
      </Container>
    );
  }
}
