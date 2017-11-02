import React from "react";
import { Animated } from "react-native";
import { View, Button, Text, Spinner } from "native-base";
import _submitAnimation from "../../animations/submitAnimation";
export default class SubmitButtonWithAnimation extends React.Component {
  state = {
    submitButtonWidth: new Animated.Value(this.props.width),
    submitButtonHeight: new Animated.Value(this.props.height),
    submitColor: new Animated.Value(0)
  };
  render() {
    const submitButtonColor = this.state.submitColor.interpolate({
      inputRange: [0, 150],
      outputRange: [this.props.color, "rgba(26, 26, 26, 1)"]
    });
    return (
      <Animated.View
        style={{
          backgroundColor: submitButtonColor,
          borderRadius: 50,
          width: this.state.submitButtonWidth,
          height: this.state.submitButtonHeight,
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
            _submitAnimation(
              this.state.submitButtonWidth,
              this.state.submitButtonHeight,
              this.state.submitColor,
              this.props.onPress
            );
          }}
        >
          {this.state.submitted ? (
            <Spinner color="#fff" />
          ) : (
            <Text style={{ color: "white" }}>{this.props.text}</Text>
          )}
        </Button>
      </Animated.View>
    );
  }
}
