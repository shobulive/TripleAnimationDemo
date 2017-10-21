import React from "react";
import LoginRegistrationAnimScreen from "../../components/LoginRegistrationAnimScreen";
import { NavigationActions } from "react-navigation";
export default class Main extends React.Component {
  render() {
    return (
      <LoginRegistrationAnimScreen
        registerLogoStyle={{ marginBottom: 30 }}
        logo={require("../../../Assets/logo.png")}
        loginLogoStyle={{ marginBottom: 30 }}
        backgroundImage={require("../../../Assets/background-image.png")}
        usernameChangeRegister={event => console.log(event.nativeEvent.text)}
        passwordChangeRegister={event => console.log(event.nativeEvent.text)}
        confirmPasswordChangeRegister={event =>
          console.log(event.nativeEvent.text)}
        emailChangeRegister={event => console.log(event.nativeEvent.text)}
        usernameChangeLogin={event => console.log(event.nativeEvent.text)}
        passwordChangeLogin={event => console.log(event.nativeEvent.text)}
        registerSubmitPress={() => {
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
        }}
        loginSubmitPress={() => {
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
        }}
      />
    );
  }
}
