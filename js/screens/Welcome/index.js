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
import FragmentedImage from "../../components/FragmentedImage";
let { width, height } = Dimensions.get("window");
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.noOfHorizontalFragments = 8;
    this.noOfVerticalFragments = 4;
    this.total = this.noOfHorizontalFragments * this.noOfVerticalFragments;
    this.position = [];
    for (let i = 1; i <= this.total; i++) {
      let x = "imageFragment" + i + "X";
      let y = "imageFragment" + i + "Y";
      this.state[x] = new Animated.Value(0);
      this.state[y] = new Animated.Value(0);
      this.position.push({ X: this.state[x], Y: this.state[y] });
    }
    this.mirrorShatterDestination = [];
    for (let i = 1; i <= this.total; i++) {
      let temp = Math.random() * (1 + 1) - 1;
      this.mirrorShatterDestination.push({
        X: temp > 0 ? width + temp : -width - temp,
        Y: Math.random() * (height / 2 + height / 2) - height / 2
      });
    }
    this.mirrorShatterDuration = [];
    for (let i = 1; i <= this.total; i++) {
      this.mirrorShatterDuration.push({
        X: Math.random() * (700 - 300) + 300,
        Y: Math.random() * (700 - 300) + 300
      });
    }
    const letterRotation = this.state.textLetterRotation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const letterAntiRotation = this.state.textLetterRotation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "-360deg"]
    });
    this.rotation = [];
    for (let i = 0; i < this.noOfHorizontalFragments / 2; i++) {
      this.rotation.push(letterRotation);
      this.rotation.push(letterAntiRotation);
    }
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
    textLetterRotation: new Animated.Value(0),
    disabled: false,
    instructionOpacity: new Animated.Value(0),
    instructionY: new Animated.Value(0),
    mainViewX: new Animated.Value(0),
    mainViewY: new Animated.Value(0),
    continueloopAnimation: true,
    image: require("../../../Assets/Geek.jpg")
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
            let x = 0;
            this.setState({
              count: this.state.count + 1,
              instrutction: "What the hell mann !! You destroyed everything"
            });
            _smallAnimation(this.state.instructionOpacity, 0, 200).start(() => {
              this.setState({
                instrutction: "oh wait! I feel something",
                image: require("../../../Assets/logo-icon-lg.png")
              });
            });

            setTimeout(() => {
              _smallAnimation(this.state.instructionOpacity, 1, 200).start();
              let newMirrorShatterDestination = [];
              for (let i = 0; i < this.mirrorShatterDestination.length; i++) {
                newMirrorShatterDestination.push({ X: 0, Y: 0 });
              }
              _mirrorShatterAnimation(
                this.position,
                newMirrorShatterDestination,
                this.mirrorShatterDuration,
                () => {
                  this.setState({ instrutction: "Thats how its done!!!" });
                },
                this.state.mainViewX,
                this.state.mainViewY,
                this.state.instructionOpacity,
                this.state.textLetterRotation
              );
            }, 2000);
          },
          this.state.mainViewX,
          this.state.mainViewY,
          this.state.instructionOpacity,
          this.state.textLetterRotation
        );
        break;
    }
  }
  render() {
    return (
      <Container
        style={{
          backgroundColor: "rgba(26,26,26,1)",
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
              marginBottom: "20%"
            }}
          >
            Welcome
          </Animated.Text>
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
            <FragmentedImage
              disabled={this.state.disabled}
              position={this.position}
              rotation={this.rotation}
              noOfHorizontalFragments={this.noOfHorizontalFragments}
              noOfVerticalFragments={this.noOfVerticalFragments}
              height={200}
              width={200}
              source={this.state.image}
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
            marginTop: "20%"
          }}
        >
          {this.state.instrutction}
        </Animated.Text>
      </Container>
    );
  }
}
