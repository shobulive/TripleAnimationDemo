import React from "react";
import { Animated, Dimensions } from "react-native";
import _mirrorBreakAnimation from "../../animations/mirrorBreakAnimation";
import _mirrorShatterAnimation from "../../animations/mirrorShatterAnimation";
import FragmentedImage from "../../components/FragmentedImage";
let { width, height } = Dimensions.get("window");
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.noOfHorizontalFragments = this.props.noOfHorizontalFragments || 8;
    this.noOfVerticalFragments = this.props.noOfVerticalFragments || 4;
    this.total = this.noOfHorizontalFragments * this.noOfVerticalFragments;
    this.position = [];
    for (let i = 1; i <= this.total; i++) {
      let x = "imageFragment" + i + "X";
      let y = "imageFragment" + i + "Y";
      this.state[x] = new Animated.Value(0);
      this.state[y] = new Animated.Value(0);
      this.position.push({ X: this.state[x], Y: this.state[y] });
    }
    this.mirrorShatterDestination = [];
    for (let i = 1; i <= this.total; i++) {
      let temp = Math.random() * (1 + 1) - 1;
      this.mirrorShatterDestination.push({
        X: temp > 0 ? width + temp : -width - temp,
        Y: Math.random() * (height / 2 + height / 2) - height / 2
      });
    }
    this.mirrorShatterDuration = [];
    for (let i = 1; i <= this.total; i++) {
      this.mirrorShatterDuration.push({
        X: Math.random() * (700 - 300) + 300,
        Y: Math.random() * (700 - 300) + 300
      });
    }
    const letterRotation = this.state.textLetterRotation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const letterAntiRotation = this.state.textLetterRotation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "-360deg"]
    });
    this.rotation = [];
    for (let i = 0; i < this.noOfHorizontalFragments / 2; i++) {
      this.rotation.push(letterRotation);
      this.rotation.push(letterAntiRotation);
    }
  }
  state = {
    count: 1,
    textLetterRotation: new Animated.Value(0),
    disabled: false,
    image: this.props.image1
  };

  _animHandler() {
    this.setState({ disabled: true });
    switch (this.state.count) {
      case 1:
        _mirrorBreakAnimation(() => {
          this.setState({
            disabled: false,
            count: this.state.count + 1
          });
          this.props.case1Callback ? this.props.case1Callback() : () => {};
        }, this.state.textLetterRotation);
        break;
      case 2:
        _mirrorShatterAnimation(
          this.position,
          this.mirrorShatterDestination,
          this.mirrorShatterDuration,
          () => {
            this.setState({
              count: this.state.count + 1
            });
            this.props.case2CallBack ? this.props.case2CallBack() : () => {};
            this.setState({
              image: this.props.image2
            });
            setTimeout(() => {
              this.props.case2ExtraCallBack
                ? this.props.case2ExtraCallBack()
                : () => {};
              let newMirrorShatterDestination = [];
              for (let i = 0; i < this.mirrorShatterDestination.length; i++) {
                newMirrorShatterDestination.push({ X: 0, Y: 0 });
              }
              _mirrorShatterAnimation(
                this.position,
                newMirrorShatterDestination,
                this.mirrorShatterDuration,
                this.props.case2AfterCallBack || (() => {}),
                this.state.textLetterRotation
              );
            }, 2000);
          },
          this.state.textLetterRotation
        );
        break;
    }
  }
  render() {
    return (
      <FragmentedImage
        disabled={this.state.disabled}
        position={this.position}
        rotation={this.rotation}
        noOfHorizontalFragments={this.noOfHorizontalFragments}
        noOfVerticalFragments={this.noOfVerticalFragments}
        height={200}
        width={200}
        source={this.state.image}
        onPress={this._animHandler.bind(this)}
      />
    );
  }
}
