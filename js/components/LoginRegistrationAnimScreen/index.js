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
import { Button, Container } from "native-base";
import Decorators from "../Decorators";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import _defaultAnimations from "../../animations/defaultRunAnimation";
import _smallAnimation from "../../animations/smallAnimation";
import PageSwitchButton from "../PageSwitchButton";
import _switchButtonAnimation from "../../animations/switchButtonAnimation";
let { height, width } = Dimensions.get("window");
export default class Main extends React.Component {
  state = {
    switchColor: new Animated.Value(0),
    heightSm: new Animated.Value(50),
    widthSm: new Animated.Value(50),
    heightLg: new Animated.Value(450),
    widthLg: new Animated.Value(450),
    decorSm1X: new Animated.Value(20),
    decorSm2X: new Animated.Value(-70),
    decorSm3X: new Animated.Value(10),
    decorSm4X: new Animated.Value(30),
    decorLg1X: new Animated.Value(0),
    decorLg2X: new Animated.Value(0),
    decorSm1Y: new Animated.Value(25),
    decorSm2Y: new Animated.Value(35),
    decorSm3Y: new Animated.Value(45),
    decorSm4Y: new Animated.Value(55),
    decorLg1Y: new Animated.Value(0),
    decorLg2Y: new Animated.Value(0),
    positionL: new Animated.Value(100),
    positionO: new Animated.Value(100),
    positionG: new Animated.Value(100),
    positionI: new Animated.Value(100),
    positionN: new Animated.Value(100),
    positionR: new Animated.Value(0),
    positionE: new Animated.Value(0),
    positionRG: new Animated.Value(0),
    positionRI: new Animated.Value(0),
    positionS: new Animated.Value(0),
    positionT: new Animated.Value(0),
    positionRE: new Animated.Value(0),
    positionRR: new Animated.Value(0),
    heightMainView: new Animated.Value(height),
    widthMainView: new Animated.Value(width),
    opacityMainView: new Animated.Value(1),
    opacityDecor: new Animated.Value(0.5),
    showRegistrationPage: false,
    buttonDiabled: false,
    buttonHeight: new Animated.Value(50),
    logoHeight: new Animated.Value(215),
    logoWidth: new Animated.Value(200),
    logoTranslateY: new Animated.Value(100),
    signInButtonWidth: new Animated.Value(width - 40),
    signInButtonHeight: new Animated.Value(45),
    signInButtonOpacity: new Animated.Value(1),
    signInColor: new Animated.Value(0),
    registerColor: new Animated.Value(0)
  };
  componentDidUpdate() {
    _switchButtonAnimation(
      this.state.showRegistrationPage,
      this.state.switchColor,
      this.state.positionL,
      this.state.positionO,
      this.state.positionG,
      this.state.positionI,
      this.state.positionN,
      this.state.positionR,
      this.state.positionE,
      this.state.positionRG,
      this.state.positionRI,
      this.state.positionS,
      this.state.positionT,
      this.state.positionRE,
      this.state.positionRR,
      this.state.logoHeight,
      this.state.logoTranslateY,
      this.state.logoWidth
    );
  }
  componentDidMount() {
    _defaultAnimations(
      this.state.decorSm1Y,
      this.state.decorSm1X,
      this.state.decorSm2Y,
      this.state.decorSm2X,
      this.state.decorSm3Y,
      this.state.decorSm3X,
      this.state.decorSm4Y,
      this.state.decorSm4X,
      this.state.decorLg1Y,
      this.state.decorLg1X,
      this.state.decorLg2Y,
      this.state.decorLg2X
    );
  }
  render() {
    const buttonColor = this.state.switchColor.interpolate({
      inputRange: [0, 150],
      outputRange: ["rgba(255,0,0,0.5)", "rgba(125, 24, 242, 0.5)"]
    });
    const singInColor = this.state.signInColor.interpolate({
      inputRange: [0, 150],
      outputRange: ["rgba(255,165,0,1)", "rgba(26, 26, 26, 1)"]
    });
    const registerColor = this.state.registerColor.interpolate({
      inputRange: [0, 150],
      outputRange: ["rgba(50,205,50,1)", "rgba(26, 26, 26, 1)"]
    });
    return (
      <Container
        style={{
          alignItems: "center",
          justifyContent: "center"
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
          showRegistrationPage={this.state.showRegistrationPage}
          widthLg={this.state.widthLg}
          heightLg={this.state.heightLg}
          widthSm={this.state.widthSm}
          heightSm={this.state.heightSm}
          opacityDecor={this.state.opacityDecor}
          decorLg1Y={this.state.decorLg1Y}
          decorLg1X={this.state.decorLg1X}
          decorLg2Y={this.state.decorLg2Y}
          decorLg2X={this.state.decorLg2Y}
          decorSm1Y={this.state.decorSm1Y}
          decorSm1X={this.state.decorSm1X}
          decorSm2Y={this.state.decorSm2Y}
          decorSm2X={this.state.decorSm2X}
          decorSm3Y={this.state.decorSm3Y}
          decorSm3X={this.state.decorSm3X}
          decorSm4Y={this.state.decorSm4Y}
          decorSm4X={this.state.decorSm4X}
        />
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
          {this.state.showRegistrationPage ? (
            <RegistrationForm
              logo={this.props.registerlogo}
              logoWidth={this.props.registerlogoWidth}
              logoHeight={this.props.registerlogoHeight}
              logoStyle={this.props.registerLogoStyle}
              usernameChange={this.props.usernameChangeRegister}
              passwordChange={this.props.passwordChangeRegister}
              confirmPasswordChange={this.props.confirmPasswordChangeRegister}
              emailChange={this.props.emailChangeRegister}
              color={registerColor}
              submitHandler={() => {
                _smallAnimation(
                  this.state.signInButtonWidth,
                  45,
                  1000
                ).start(() => {
                  setTimeout(() => {
                    Animated.parallel([
                      _smallAnimation(
                        this.state.signInButtonHeight,
                        height + 1000,
                        200
                      ),
                      _smallAnimation(this.state.signInButtonWidth, width, 200),
                      _smallAnimation(this.state.signInButtonOpacity, 0.7, 200),
                      _smallAnimation(this.state.registerColor, 150, 500),
                      _smallAnimation(this.state.buttonHeight, 0, 500)
                    ]).start(() => {
                      this.props.registerSubmitPress();
                    });
                  }, 1000);
                });
              }}
              registerButtonWidth={this.state.signInButtonWidth}
              registerButtonHeight={this.state.signInButtonHeight}
            />
          ) : (
            <LoginForm
              logo={this.props.loginlogo}
              logoWidth={this.props.loginlogoWidth}
              logoHeight={this.props.loginlogoHeight}
              logoStyle={this.props.loginLogoStyle}
              usernameChange={this.props.usernameChangeLogin}
              passwordChange={this.props.passwordChangeLogin}
              signInbackgroundColor={singInColor}
              submitHandler={() => {
                _smallAnimation(
                  this.state.signInButtonWidth,
                  45,
                  1000
                ).start(() => {
                  setTimeout(() => {
                    Animated.parallel([
                      _smallAnimation(
                        this.state.signInButtonHeight,
                        height + 1000,
                        200
                      ),
                      _smallAnimation(this.state.signInButtonWidth, width, 200),
                      _smallAnimation(this.state.signInColor, 150, 500),
                      _smallAnimation(this.state.buttonHeight, 0, 500)
                    ]).start(() => {
                      this.props.loginSubmitPress();
                    });
                  }, 1000);
                });
              }}
              signInButtonWidth={this.state.signInButtonWidth}
              signInButtonHeight={this.state.signInButtonHeight}
            />
          )}
        </Animated.View>

        <Animated.View
          style={{
            width: width,
            height: this.state.buttonHeight,
            marginBottom: "-2%"
          }}
        >
          <PageSwitchButton
            buttonColor={buttonColor}
            setDisabledTrue={() => this.setState({ buttonDiabled: true })}
            setDisabledFalseAndRegToogle={() => {
              this.setState({
                buttonDiabled: false,
                showRegistrationPage: !this.state.showRegistrationPage
              });
            }}
            extraStyles={{ backgroundColor: buttonColor }}
            buttonDiabled={this.state.buttonDiabled}
            buttonHeight={this.state.buttonHeight}
            widthMainView={this.state.widthMainView}
            heightMainView={this.state.heightMainView}
            opacityMainView={this.state.opacityMainView}
            widthLg={this.state.widthLg}
            heightLg={this.state.heightLg}
            widthSm={this.state.widthSm}
            heightSm={this.state.heightSm}
            opacityDecor={this.state.opacityDecor}
            showRegistrationPage={this.state.showRegistrationPage}
            positionL={this.state.positionL}
            positionO={this.state.positionO}
            positionG={this.state.positionG}
            positionI={this.state.positionI}
            positionN={this.state.positionN}
            positionR={this.state.positionR}
            positionE={this.state.positionE}
            positionRG={this.state.positionRG}
            positionRI={this.state.positionRI}
            positionS={this.state.positionS}
            positionT={this.state.positionT}
            positionRE={this.state.positionRE}
            positionRR={this.state.positionRR}
          />
        </Animated.View>
      </Container>
    );
  }
}
