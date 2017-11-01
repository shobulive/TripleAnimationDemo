import React from "react";
import PageSwitchBackGroundAnims from "../../components/PageSwitchBackGroundAnims";
import { NavigationActions } from "react-navigation";
import { Animated, Dimensions } from "react-native";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
let { width } = Dimensions.get("window");
let buttonHeightHere;
export default class Main extends React.Component {
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
    return (
      <PageSwitchBackGroundAnims
        containerStyle={{ backgroundColor: "#000" }}
        backgroundImage={require("../../../Assets/background-image.png")}
        logo={require("../../../Assets/logo.png")}
        logoStyle={{ marginBottom: 30 }}
        lgDecorColorArray={[
          ["rgba(255,165,0,1)", "rgba(50,205,50,1)"],
          ["#ff0000", "#7d18f2"]
        ]}
        switchButtonColor1="rgba(255,0,0,0.5)"
        switchButtonColor2="rgba(125, 24, 242, 0.5)"
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
            onPressSubmit={this._buttonPress.bind(this)}
            color="rgba(255,165,0,1)"
          />
        }
        page2={
          <RegistrationForm
            usernameChange={event => console.log(event.nativeEvent.text)}
            passwordChange={event => console.log(event.nativeEvent.text)}
            confirmPasswordChange={event => console.log(event.nativeEvent.text)}
            emailChange={event => console.log(event.nativeEvent.text)}
            onPress={this._buttonPress.bind(this)}
            color="rgba(50,205,50,1)"
          />
        }
      />
    );
  }
}
