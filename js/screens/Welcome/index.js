import React from "react";
import { Image, StatusBar, Text, Animated, Dimensions } from "react-native";
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
    mainViewY: new Animated.Value(0)
  };
  _roationAnimation() {
    Animated.sequence([
      _smallAnimation(this.state.textLetterRotaion, 360, 200),
      _smallAnimation(this.state.textLetterRotaion, 0, 200)
    ]).start(() => {
      this._roationAnimation();
    });
  }
  _animHandler() {
    this.setState({ disabled: true });
    switch (this.state.count) {
      case 1:
        Animated.parallel([
          _smallAnimation(this.state.textLetterRotaion, 45, 200),
          _smallAnimation(this.state.instructionOpacity, 0, 500),
          Animated.sequence([
            _smallAnimation(this.state.mainViewX, 3, 10),
            _smallAnimation(this.state.mainViewX, 0, 10),
            _smallAnimation(this.state.mainViewX, -3, 10),
            _smallAnimation(this.state.mainViewX, 0, 10),
            _smallAnimation(this.state.mainViewY, 3, 10),
            _smallAnimation(this.state.mainViewY, 0, 10),
            _smallAnimation(this.state.mainViewY, -3, 10),
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
        break;
      case 2:
        this._roationAnimation();
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
            _smallAnimation(this.state.mainViewX, 3, 10),
            _smallAnimation(this.state.mainViewX, 0, 10),
            _smallAnimation(this.state.mainViewX, -3, 10),
            _smallAnimation(this.state.mainViewX, 0, 10),
            _smallAnimation(this.state.mainViewY, 3, 10),
            _smallAnimation(this.state.mainViewY, 0, 10),
            _smallAnimation(this.state.mainViewY, -3, 10),
            _smallAnimation(this.state.mainViewY, 0, 10)
          ])
        ]).start(() => {
          _smallAnimation(this.state.logoOpacity, 1, 500).start();
          this.setState({
            count: this.state.count + 1,
            instrutction: "Now thats how we roll"
          });
          _smallAnimation(this.state.instructionOpacity, 1, 500).start();
        });

        break;
    }
  }
  render() {
    const letter1rotation = this.state.textLetterRotaion.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const letter2rotation = this.state.textLetterRotaion.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "-360deg"]
    });
    const letter3rotation = this.state.textLetterRotaion.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const letter4rotation = this.state.textLetterRotaion.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "-360deg"]
    });
    const letter5rotation = this.state.textLetterRotaion.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const letter6rotation = this.state.textLetterRotaion.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "-360deg"]
    });
    const letter7rotation = this.state.textLetterRotaion.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
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
              opacity: this.state.welcomeOpacity
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
                  { translateX: this.state.textLetter1X },
                  { translateY: this.state.textLetter1Y },
                  { rotate: letter1rotation }
                ]
              }}
              disabled={this.state.disabled}
              onPress={() => {
                this._animHandler();
              }}
            >
              {"<"}
            </Animated.Text>
            <Animated.Text
              style={{
                textShadowColor: "orange",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 15,
                fontSize: 42,
                color: "orange",
                paddingTop: 50,
                paddingBottom: 50,
                transform: [
                  { translateX: this.state.textLetter2X },
                  { translateY: this.state.textLetter2Y },
                  { rotate: letter2rotation }
                ]
              }}
              disabled={this.state.disabled}
              onPress={() => {
                this._animHandler();
              }}
            >
              G
            </Animated.Text>
            <Animated.Text
              style={{
                textShadowColor: "orange",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 15,
                fontSize: 42,
                color: "orange",
                paddingTop: 50,
                paddingBottom: 50,
                transform: [
                  { translateX: this.state.textLetter3X },
                  { translateY: this.state.textLetter3Y },
                  { rotate: letter3rotation }
                ]
              }}
              disabled={this.state.disabled}
              onPress={() => {
                this._animHandler();
              }}
            >
              E
            </Animated.Text>
            <Animated.Text
              style={{
                textShadowColor: "orange",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 15,
                fontSize: 42,
                color: "orange",
                paddingTop: 50,
                paddingBottom: 50,
                transform: [
                  { translateX: this.state.textLetter4X },
                  { translateY: this.state.textLetter4Y },
                  { rotate: letter4rotation }
                ]
              }}
              disabled={this.state.disabled}
              onPress={() => {
                this._animHandler();
              }}
            >
              E
            </Animated.Text>
            <Animated.Text
              style={{
                textShadowColor: "orange",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 15,
                fontSize: 42,
                color: "orange",
                paddingTop: 50,
                paddingBottom: 50,
                transform: [
                  { translateX: this.state.textLetter5X },
                  { translateY: this.state.textLetter5Y },
                  { rotate: letter5rotation }
                ]
              }}
              disabled={this.state.disabled}
              onPress={() => {
                this._animHandler();
              }}
            >
              K
            </Animated.Text>
            <Animated.Text
              style={{
                textShadowColor: "orange",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 15,
                fontSize: 42,
                color: "orange",
                paddingTop: 50,
                paddingBottom: 50,
                transform: [
                  { translateX: this.state.textLetter6X },
                  { translateY: this.state.textLetter6Y },
                  { rotate: letter6rotation }
                ]
              }}
              disabled={this.state.disabled}
              onPress={() => {
                this._animHandler();
              }}
            >
              {"/"}
            </Animated.Text>
            <Animated.Text
              style={{
                textShadowColor: "orange",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 15,
                fontSize: 42,
                color: "orange",
                paddingTop: 50,
                paddingBottom: 50,
                transform: [
                  { translateX: this.state.textLetter7X },
                  { translateY: this.state.textLetter7Y },
                  { rotate: letter7rotation }
                ]
              }}
              disabled={this.state.disabled}
              onPress={() => {
                this._animHandler();
              }}
            >
              {">"}
            </Animated.Text>
          </Animated.View>
        </Animated.View>
        <Animated.Text
          style={{
            color: "#fff",
            opacity: this.state.instructionOpacity,
            transform: [{ translateY: this.state.instructionY }],
            alignSelf: "center"
          }}
        >
          {this.state.instrutction}
        </Animated.Text>
      </Container>
    );
  }
}
