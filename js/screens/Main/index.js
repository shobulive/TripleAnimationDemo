import React from "react";
import PageSwitchBackGroundAnims from "../../components/PageSwitchBackGroundAnims";
import { NavigationActions } from "react-navigation";
import { Animated, Dimensions } from "react-native";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import _submitAnimation from "../../animations/submitAnimation";
let { width } = Dimensions.get("window");
let buttonHeightHere;
export default class Main extends React.Component {
  state = {
    submitButtonWidth: new Animated.Value(width - 40),
    submitButtonHeight: new Animated.Value(45),
    submitButtonOpacity: new Animated.Value(1),
    submitPage1Color: new Animated.Value(0),
    submitPage2Color: new Animated.Value(0)
  };
  _buttonPress() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Welcome"
          })
        ]
      })
    );
  }
  render() {
    const page1SubmitColor = this.state.submitPage1Color.interpolate({
      inputRange: [0, 150],
      outputRange: ["rgba(255,165,0,1)", "rgba(26, 26, 26, 1)"]
    });
    const page2SubmitColor = this.state.submitPage2Color.interpolate({
      inputRange: [0, 150],
      outputRange: ["rgba(50,205,50,1)", "rgba(26, 26, 26, 1)"]
    });
    return (
      <PageSwitchBackGroundAnims
        backgroundImage={require("../../../Assets/background-image.png")}
        logo={require("../../../Assets/logo.png")}
        logoStyle={{ marginBottom: 30 }}
        reduceButtonHeight={buttonHeight => {
          buttonHeightHere = buttonHeight;
        }}
        lgDecorColorArray={[
          ["rgba(255,165,0,1)", "rgba(50,205,50,1)"],
          ["#ff0000", "#7d18f2"]
        ]}
        smDecorColor="#ccc"
        dimensionsSmDecor={50}
        dimensionsLgDecor={450}
        noOfDecors={6}
        page1SwitchText="Login"
        page2SwitchText="Register"
        page1={
          <LoginForm
            usernameChange={event => console.log(event.nativeEvent.text)}
            passwordChange={event => console.log(event.nativeEvent.text)}
            submitHandler={() => {
              _submitAnimation(
                this.state.submitButtonWidth,
                this.state.submitButtonHeight,
                this.state.submitPage1Color,
                buttonHeightHere,
                this._buttonPress.bind(this)
              );
            }}
            color={page1SubmitColor}
            buttonWidth={this.state.submitButtonWidth}
            buttonHeight={this.state.submitButtonHeight}
          />
        }
        page2={
          <RegistrationForm
            usernameChange={event => console.log(event.nativeEvent.text)}
            passwordChange={event => console.log(event.nativeEvent.text)}
            confirmPasswordChange={event => console.log(event.nativeEvent.text)}
            emailChange={event => console.log(event.nativeEvent.text)}
            color={page2SubmitColor}
            submitHandler={() => {
              _submitAnimation(
                this.state.submitButtonWidth,
                this.state.submitButtonHeight,
                this.state.submitPage2Color,
                buttonHeightHere,
                this._buttonPress.bind(this)
              );
            }}
            buttonWidth={this.state.submitButtonWidth}
            buttonHeight={this.state.submitButtonHeight}
          />
        }
      />
    );
  }
}
