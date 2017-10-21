import React from "react";
import {
  Image,
  StatusBar,
  Text,
  Animated,
  Dimensions,
  Vibration
} from "react-native";
import { Container, Content, View } from "native-base";
import _smallAnimation from "../../animations/smallAnimation";
let { width, height } = Dimensions.get("window");
export default class Welcome extends React.Component {
  _upDownRepeatAnimation() {
    Animated.sequence([
      _smallAnimation(this.state.instructionY, 20, 500),
      _smallAnimation(this.state.instructionY, 0, 200)
    ]).start(() => this._upDownRepeatAnimation());
  }
  _renderGeekText(text, position, rotation) {
    let letters = [],
      n = 0;
    for (let i = 0; i < text.length; i++) {
      letters.push(
        <Animated.Text
          style={{
            fontSize: 42,
            color: "orange",
            textShadowColor: "orange",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 15,
            paddingTop: 50,
            paddingBottom: 50,
            transform: [
              { translateX: position[i].X },
              { translateY: position[i].Y },
              { rotate: rotation[n++] }
            ]
          }}
          key={i}
          disabled={this.state.disabled}
          onPress={() => {
            this._animHandler();
          }}
        >
          {text.charAt(i)}
        </Animated.Text>
      );
      if (n > 1) {
        n = 0;
      }
    }
    return letters;
  }
  _roundRotation(stateX, stateY, x1, x2, x3, x4, y1, y2, y3, y4) {
    Animated.sequence([
      Animated.parallel([
        _smallAnimation(stateX, x1, 300),
        _smallAnimation(stateY, y1, 150)
      ]),
      Animated.parallel([
        _smallAnimation(stateX, x2, 150),
        _smallAnimation(stateY, y2, 300)
      ]),
      Animated.parallel([
        _smallAnimation(stateX, x3, 300),
        _smallAnimation(stateY, y3, 150)
      ]),
      Animated.parallel([
        _smallAnimation(stateX, x4, 150),
        _smallAnimation(stateY, y4, 300)
      ])
    ]).start(() => {
      if (this.state.continueloopAnimation)
        this._roundRotation(stateX, stateY, x1, x2, x3, x4, y1, y2, y3, y4);
    });
  }
  componentDidMount() {
    this._upDownRepeatAnimation();
    _smallAnimation(this.state.welcomeOpacity, 1, 1000).start(() => {
      _smallAnimation(this.state.geekOpacity, 1, 1000).start(() =>
        _smallAnimation(this.state.instructionOpacity, 1, 1000).start()
      );
    });
  }
  state = {
    count: 1,
    instrutction: "Tap on the <Geek/> logo",
    welcomeOpacity: new Animated.Value(0),
    geekOpacity: new Animated.Value(0),
    logoOpacity: new Animated.Value(0),
    textLetterRotaion: new Animated.Value(0),
    textLetter1X: new Animated.Value(0),
    textLetter2X: new Animated.Value(0),
    textLetter3X: new Animated.Value(0),
    textLetter4X: new Animated.Value(0),
    textLetter5X: new Animated.Value(0),
    textLetter6X: new Animated.Value(0),
    textLetter7X: new Animated.Value(0),
    textLetter1Y: new Animated.Value(0),
    textLetter2Y: new Animated.Value(0),
    textLetter3Y: new Animated.Value(0),
    textLetter4Y: new Animated.Value(0),
    textLetter5Y: new Animated.Value(0),
    textLetter6Y: new Animated.Value(0),
    textLetter7Y: new Animated.Value(0),
    disabled: false,
    instructionOpacity: new Animated.Value(0),
    instructionY: new Animated.Value(0),
    mainViewX: new Animated.Value(0),
    mainViewY: new Animated.Value(0),
    continueloopAnimation: true
  };
  _roationAnimation() {
    Animated.sequence([
      _smallAnimation(this.state.textLetterRotaion, 360, 200),
      _smallAnimation(this.state.textLetterRotaion, 0, 200)
    ]).start(() => {
      this._roationAnimation();
    });
  }
  _mirrorBreakAnimation() {
    Vibration.vibrate(1000);
    Animated.parallel([
      _smallAnimation(this.state.textLetterRotaion, 45, 200),
      _smallAnimation(this.state.instructionOpacity, 0, 500),
      Animated.sequence([
        _smallAnimation(this.state.mainViewX, 10, 10),
        _smallAnimation(this.state.mainViewX, 0, 10),
        _smallAnimation(this.state.mainViewX, -10, 10),
        _smallAnimation(this.state.mainViewX, 0, 10),
        _smallAnimation(this.state.mainViewY, 10, 10),
        _smallAnimation(this.state.mainViewY, 0, 10),
        _smallAnimation(this.state.mainViewY, -10, 10),
        _smallAnimation(this.state.mainViewY, 0, 10)
      ])
    ]).start(() => {
      this.setState({
        disabled: false,
        count: this.state.count + 1,
        instrutction: "Oops you broke it, Tap again to clean up"
      });
      _smallAnimation(this.state.instructionOpacity, 1, 500).start();
    });
  }
  _letterRotation() {
    _smallAnimation(this.state.instructionOpacity, 0, 500).start();
    this._roundRotation(
      this.state.textLetter1X,
      this.state.textLetter1Y,
      100,
      200,
      100,
      0,
      100,
      0,
      -100,
      0
    );
    _smallAnimation(this.state.textLetter2X, -25, 200).start(() => {
      this._roundRotation(
        this.state.textLetter2X,
        this.state.textLetter2Y,
        75,
        175,
        75,
        -25,
        100,
        0,
        -100,
        0
      );
      _smallAnimation(this.state.textLetter3X, -50, 200).start(() => {
        this._roundRotation(
          this.state.textLetter3X,
          this.state.textLetter3Y,
          50,
          150,
          50,
          -50,
          100,
          0,
          -100,
          0
        );
        _smallAnimation(this.state.textLetter4X, -75, 200).start(() => {
          this._roundRotation(
            this.state.textLetter4X,
            this.state.textLetter4Y,
            25,
            125,
            25,
            -75,
            100,
            0,
            -100,
            0
          );
          _smallAnimation(this.state.textLetter5X, -100, 200).start(() => {
            this._roundRotation(
              this.state.textLetter5X,
              this.state.textLetter5Y,
              0,
              100,
              0,
              -100,
              100,
              0,
              -100,
              0
            );
            _smallAnimation(this.state.textLetter6X, -125, 200).start(() => {
              this._roundRotation(
                this.state.textLetter6X,
                this.state.textLetter6Y,
                -25,
                75,
                -25,
                -125,
                100,
                0,
                -100,
                0
              );
              _smallAnimation(this.state.textLetter7X, -150, 200).start(() => {
                this._roundRotation(
                  this.state.textLetter7X,
                  this.state.textLetter7Y,
                  -50,
                  50,
                  -50,
                  -150,
                  100,
                  0,
                  -100,
                  0
                );
                this.setState({
                  count: this.state.count + 1,
                  instrutction:
                    "Look what you have done! Quick, \n tap on any of the flying character"
                });
                _smallAnimation(this.state.instructionOpacity, 1, 500).start();
              });
            });
          });
        });
      });
    });
  }
  _mirrorShatterAnimation() {
    this.setState({ continueloopAnimation: false });
    setTimeout(() => {
      Vibration.vibrate(1000);
      this._roationAnimation();
      Vibration.vibrate(1000);
      Animated.parallel([
        _smallAnimation(this.state.textLetter1X, -width, 500),
        _smallAnimation(this.state.textLetter1Y, 70, 400),
        _smallAnimation(this.state.textLetter2X, -100, 400),
        _smallAnimation(this.state.textLetter2Y, height, 700),
        _smallAnimation(this.state.textLetter3X, 50, 300),
        _smallAnimation(this.state.textLetter3Y, height, 600),
        _smallAnimation(this.state.textLetter4X, 25, 100),
        _smallAnimation(this.state.textLetter4Y, height, 500),
        _smallAnimation(this.state.textLetter5X, -20, 150),
        _smallAnimation(this.state.textLetter5Y, height, 550),
        _smallAnimation(this.state.textLetter6X, 100, 400),
        _smallAnimation(this.state.textLetter6Y, height, 600),
        _smallAnimation(this.state.textLetter7X, width, 500),
        _smallAnimation(this.state.textLetter7Y, 80, 350),
        _smallAnimation(this.state.instructionOpacity, 0, 500),
        Animated.sequence([
          _smallAnimation(this.state.mainViewX, 10, 10),
          _smallAnimation(this.state.mainViewX, 0, 10),
          _smallAnimation(this.state.mainViewX, -10, 10),
          _smallAnimation(this.state.mainViewX, 0, 10),
          _smallAnimation(this.state.mainViewY, 10, 10),
          _smallAnimation(this.state.mainViewY, 0, 10),
          _smallAnimation(this.state.mainViewY, -10, 10),
          _smallAnimation(this.state.mainViewY, 0, 10)
        ])
      ]).start(() => {
        _smallAnimation(this.state.logoOpacity, 1, 500).start();
        this.setState({
          count: this.state.count + 1,
          instrutction: "Now thats how we roll !!!!!"
        });
        _smallAnimation(this.state.instructionOpacity, 1, 500).start();
      });
    }, 1000);
  }
  _animHandler() {
    this.setState({ disabled: true });
    switch (this.state.count) {
      case 1:
        this._mirrorBreakAnimation();
        break;
      case 2:
        this._letterRotation();
        break;
      case 3:
        this._mirrorShatterAnimation();
        break;
    }
  }
  render() {
    const letterRotation = this.state.textLetterRotaion.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const letterAntiRotation = this.state.textLetterRotaion.interpolate({
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
            {this._renderGeekText(
              "<Geek/>",
              [
                { X: this.state.textLetter1X, Y: this.state.textLetter1Y },
                { X: this.state.textLetter2X, Y: this.state.textLetter2Y },
                { X: this.state.textLetter3X, Y: this.state.textLetter3Y },
                { X: this.state.textLetter4X, Y: this.state.textLetter4Y },
                { X: this.state.textLetter5X, Y: this.state.textLetter5Y },
                { X: this.state.textLetter6X, Y: this.state.textLetter6Y },
                { X: this.state.textLetter7X, Y: this.state.textLetter7Y }
              ],
              [letterRotation, letterAntiRotation]
            )}
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
