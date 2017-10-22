import React from "react";
import { Animated, Dimensions } from "react-native";
import { View, Form, Item, Input, Button, Text, Spinner } from "native-base";
export default class LoginForm extends React.Component {
  state = {
    submitted: false
  };
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
        <Animated.View
          style={{
            backgroundColor: this.props.color,
            borderRadius: 50,
            width: this.props.buttonWidth,
            height: this.props.buttonHeight,
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <Button
            full
            transparent
            onPress={() => {
              this.setState({ submitted: true });
              this.props.submitHandler();
            }}
          >
            {this.state.submitted ? (
              <Spinner color="#fff" />
            ) : (
              <Text style={{ color: "white" }}>Sign In</Text>
            )}
          </Button>
        </Animated.View>
      </View>
    );
  }
}
