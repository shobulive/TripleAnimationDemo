import React from "react";
import { Animated, Dimensions } from "react-native";
import { View, Form, Item, Input, Button, Text, Spinner } from "native-base";
import SubmitButtonWithAnimation from "../SubmitButtonWithAnimation";
let { width } = Dimensions.get("window");
export default class LoginForm extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Form>
          <Item
            style={{
              backgroundColor: "white",
              width: "100%",
              marginBottom: "5%"
            }}
            rounded
          >
            <Input
              placeholder="Username"
              onChange={event => {
                this.props.usernameChange(event);
              }}
            />
          </Item>
          <Item
            style={{
              backgroundColor: "white",
              width: "100%",
              marginBottom: "5%"
            }}
            rounded
          >
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChange={event => {
                this.props.passwordChange(event);
              }}
            />
          </Item>
        </Form>
        <SubmitButtonWithAnimation
          width={width - 40}
          height={45}
          color={this.props.color}
          onPress={this.props.onPressSubmit}
          text="Login"
        />
      </View>
    );
  }
}
