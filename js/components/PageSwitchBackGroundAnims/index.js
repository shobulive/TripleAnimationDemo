import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Animated,
  StatusBar,
  Dimensions,
  Image
} from "react-native";
import { Button, Container, Content } from "native-base";
import Decorators from "../Decorators";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import _defaultAnimations from "../../animations/defaultRunAnimation";
import _smallAnimation from "../../animations/smallAnimation";
import PageSwitchButton from "../PageSwitchButton";
import _switchButtonAnimation from "../../animations/switchButtonAnimation";
import _submitAnimation from "../../animations/submitAnimation";
let { height, width } = Dimensions.get("window");
let page1SwitchText = "Login";
let page2SwitchText = "Register";
export default class Main extends React.Component {
  state = {
    switchColor: new Animated.Value(0),
    dimensionsSm: new Animated.Value(50),
    dimensionsLg: new Animated.Value(450),
    heightMainView: new Animated.Value(height),
    widthMainView: new Animated.Value(width),
    opacityMainView: new Animated.Value(1),
    opacityDecor: new Animated.Value(0.5),
    show2ndPage: false,
    buttonDisabled: false,
    buttonHeight: new Animated.Value(50),
    logoHeight: new Animated.Value(215),
    logoWidth: new Animated.Value(200),
    logoTranslateY: new Animated.Value(100),
    submitButtonWidth: new Animated.Value(width - 40),
    submitButtonHeight: new Animated.Value(45),
    submitButtonOpacity: new Animated.Value(1),
    submitPage1Color: new Animated.Value(0),
    submitPage2Color: new Animated.Value(0)
  };
  constructor(props) {
    super(props);
    this.props.reduceButtonHeight(this.state.buttonHeight);
    this.lgDecorColor = ["#7d18f2", "#ff0000"];
    this.decor = [];
    for (let i = 0; i < 6; i++) {
      let x = "decor" + i + "X";
      let y = "decor" + i + "Y";
      if (i == 0) {
        this.state[x] = new Animated.Value(0);
        this.state[y] = new Animated.Value(0);
      } else if (i == 1) {
        this.state[x] = new Animated.Value(width - 300);
        this.state[y] = new Animated.Value(height - 400);
      } else {
        this.state[x] = new Animated.Value(
          Math.random() * (width - 25 - 0) + 0
        );
        this.state[y] = new Animated.Value(
          Math.random() * (height - 300 - 0) + 0
        );
      }
      this.decor.push({ X: this.state[x], Y: this.state[y] });
    }
    this.page1TextStateVal = [];
    for (let i = 0; i < page1SwitchText.length; i++) {
      let y = "decor" + i + page1SwitchText.charAt(i) + "Y";
      this.state[y] = new Animated.Value(100);
      this.page1TextStateVal.push(this.state[y]);
    }
    this.page2TextStateVal = [];
    for (let i = 0; i < page2SwitchText.length; i++) {
      let y = "decor" + i + page2SwitchText.charAt(i) + "Y";
      this.state[y] = new Animated.Value(0);
      this.page2TextStateVal.push(this.state[y]);
    }

    this.toFro = [];
    for (let i = 0; i < this.decor.length; i++) {
      this.toFro.push({
        X: [
          this.decor[i].X._value -
            (i == 0 || i == 1
              ? Math.random() * (10 + 10) - 10
              : Math.random() * (15 + 15) - 15),
          this.decor[i].X._value
        ],
        Y: [
          this.decor[i].Y._value -
            (i == 0 || i == 1
              ? Math.random() * (5 + 5) - 5
              : Math.random() * (15 + 15) - 15),
          this.decor[i].Y._value
        ]
      });
    }
    this.duration = [];
    this.defaultDuration = 3000;
    for (let i = 0; i < this.decor.length; i++) {
      this.duration.push({
        X: [
          this.defaultDuration - (Math.random() * (100 + 500) - 500),
          this.defaultDuration - (Math.random() * (100 + 500) - 500)
        ],
        Y: [
          this.defaultDuration - (Math.random() * (100 + 500) - 500),
          this.defaultDuration - (Math.random() * (100 + 500) - 500)
        ]
      });
    }
  }
  componentDidUpdate() {
    _switchButtonAnimation(
      this.state.show2ndPage,
      this.state.switchColor,
      this.page1TextStateVal,
      this.page2TextStateVal,
      this.state.logoHeight,
      this.state.logoTranslateY,
      this.state.logoWidth
    );
  }
  componentDidMount() {
    _defaultAnimations(this.decor, this.toFro, this.duration);
  }
  render() {
    const buttonColor = this.state.switchColor.interpolate({
      inputRange: [0, 150],
      outputRange: ["rgba(255,0,0,0.5)", "rgba(125, 24, 242, 0.5)"]
    });

    try {
      return (
        <Container
          style={{
            alignItems: "center"
          }}
        >
          <StatusBar barStyle="light-content" />
          <ImageBackground
            source={this.props.backgroundImage}
            style={{ position: "absolute", width: width, height: height }}
            resizeMethod="auto"
            resizeMode="cover"
          />
          <Decorators
            show2ndPage={this.state.show2ndPage}
            dimensionsLg={this.state.dimensionsLg}
            dimensionsSm={this.state.dimensionsSm}
            opacityDecor={this.state.opacityDecor}
            decorStateVal={this.decor}
            lgDecorColor={this.lgDecorColor}
            smDecorColor="#ccc"
          />
          <Content>
            <View
              style={{
                flex: 1,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                height: height,
                width: width
              }}
            >
              <Animated.Image
                source={this.props.logo}
                style={[
                  {
                    width: this.state.logoWidth,
                    height: this.state.logoHeight,
                    transform: [{ translateY: this.state.logoTranslateY }]
                  },
                  this.props.logoStyle
                ]}
                resizeMethod="auto"
                resizeMode="contain"
              />
              <Animated.View
                style={{
                  flex: 1,
                  height: this.state.heightMainView,
                  width: this.state.widthMainView,
                  opacity: this.state.opacityMainView,
                  padding: "5%"
                }}
              >
                {this.state.show2ndPage ? this.props.page2 : this.props.page1}
              </Animated.View>
            </View>
          </Content>
          <Animated.View
            style={{
              width: width,
              height: this.state.buttonHeight,
              marginBottom: "-2%"
            }}
          >
            <PageSwitchButton
              buttonColor={buttonColor}
              setDisabledTrue={() => this.setState({ buttonDisabled: true })}
              setDisabledFalseAndRegToogle={() => {
                this.setState({
                  buttonDisabled: false,
                  show2ndPage: !this.state.show2ndPage
                });
              }}
              page2Text={page2SwitchText}
              page1Text={page1SwitchText}
              extraStyles={{ backgroundColor: buttonColor }}
              buttonDisabled={this.state.buttonDisabled}
              buttonHeight={this.state.buttonHeight}
              widthMainView={this.state.widthMainView}
              heightMainView={this.state.heightMainView}
              opacityMainView={this.state.opacityMainView}
              dimensionsLg={this.state.dimensionsLg}
              dimensionsSm={this.state.dimensionsSm}
              opacityDecor={this.state.opacityDecor}
              show2ndPage={this.state.show2ndPage}
              page1TextStateVal={this.page1TextStateVal}
              page2TextStateVal={this.page2TextStateVal}
            />
          </Animated.View>
        </Container>
      );
    } catch (err) {
      console.log(err);
      return <Container />;
    }
  }
}
