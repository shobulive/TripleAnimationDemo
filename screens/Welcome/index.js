import React from "react";
import { StatusBar, Text, Animated, Dimensions } from "react-native";
import { Container, View } from "native-base";
import _smallAnimation from "../../anims/smallAnimation";
import _dramaticAppearanceAnimation from "../../anims/dramaticApperanceAnimation";
import _upDownRepeatAnimation from "../../anims/upDownRepeatAnimations";
import ShatteringImage from "../../Animations3T/main/ShattereringImage";
let { width, height } = Dimensions.get("window");
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    _upDownRepeatAnimation(this.state.instructionY);
    _dramaticAppearanceAnimation(
      this.state.welcomeOpacity,
      this.state.instructionOpacity
    );
  }
  state = {
    count: 1,
    instrutction: "Tap on the <Geek/> logo",
    welcomeOpacity: new Animated.Value(0),
    instructionOpacity: new Animated.Value(0),
    instructionY: new Animated.Value(0)
  };
  render() {
    return (
      <Container
        style={{
          backgroundColor: "rgba(26,26,26,1)",
          padding: "5%",
          paddingTop: "50%"
        }}
      >
        <StatusBar barStyle="light-content" />
        <Animated.View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Animated.Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: "#fff",
              opacity: this.state.welcomeOpacity,
              marginBottom: "20%"
            }}
          >
            Welcome
          </Animated.Text>
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
            <ShatteringImage
              noOfHorizontalFragments={10}
              noOfVerticalFragments={10}
              image1={require("../../Assets/Geek.jpg")}
              case1Callback={() => {
                this.setState({
                  instrutction: "Oops you broke it, Tap again to clean up"
                });
              }}
              case2CallBack={() => {
                this.setState({
                  instrutction: "What the hell mann !! You destroyed everything"
                });
                setTimeout(() => {
                  this.setState({
                    instrutction: "oh wait! I feel something"
                  });
                }, 1000);
              }}
              image2={require("../../Assets/logo-icon-lg.png")}
              case2ExtraCallBack={() => {
                _smallAnimation(this.state.instructionOpacity, 1, 200).start();
              }}
              case2AfterCallBack={() => {
                this.setState({ instrutction: "Thats how its done!!!" });
              }}
            />
          </Animated.View>
        </Animated.View>
        <Animated.Text
          style={{
            color: "#fff",
            opacity: this.state.instructionOpacity,
            transform: [{ translateY: this.state.instructionY }],
            alignSelf: "center",
            marginTop: "20%"
          }}
        >
          {this.state.instrutction}
        </Animated.Text>
      </Container>
    );
  }
}
