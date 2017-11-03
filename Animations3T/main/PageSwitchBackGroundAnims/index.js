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
import Decorators from "../../components/Decorators";
import _defaultAnimations from "../../animations/defaultRunAnimation";
import PageSwitchButton from "../../components/PageSwitchButton";
import _switchButtonAnimation from "../../animations/switchButtonAnimation";
let { height, width } = Dimensions.get("window");
let page1SwitchText, page2SwitchText;
export default class PageSwitchBackGroundAnims extends React.Component {
  state = {
    switchColor: new Animated.Value(0),
    dimensionsSm: new Animated.Value(this.props.dimensionsSmDecor || 45),
    dimensionsLg: new Animated.Value(this.props.dimensionsLgDecor || 450),
    heightMainView: new Animated.Value(height),
    widthMainView: new Animated.Value(width),
    opacityMainView: new Animated.Value(1),
    opacityDecor: new Animated.Value(0.5),
    show2ndPage: false,
    buttonDisabled: false,
    buttonHeight: new Animated.Value(50),
    logoHeight: new Animated.Value(215),
    logoWidth: new Animated.Value(200),
    logoTranslateY: new Animated.Value(100)
  };
  constructor(props) {
    super(props);
    page1SwitchText = this.props.page1SwitchText || "Page1";
    page2SwitchText = this.props.page2SwitchText || "Page2";
    this.color = this.props.lgDecorColorArray || [
      ["rgba(255,165,0,1)", "rgba(50,205,50,1)"],
      ["#ff0000", "#7d18f2"]
    ];
    this.lgDecorColor = [];
    for (let i = 0; i < this.color.length; i++) {
      let nm = "ldDecor" + i + "color";
      this.state[nm] = new Animated.Value(0);
      this.lgDecorColor.push(this.state[nm]);
    }
    this.lgDecorColorOutput = [];
    for (let i = 0; i < this.color.length; i++) {
      let nm = "ldDecor" + i + "color";
      this.lgDecorColorOutput.push(
        this.state[nm].interpolate({
          inputRange: [0, 150],
          outputRange: [this.color[i][0], this.color[i][1]]
        })
      );
    }
    this.decor = [];
    for (let i = 0; i < (this.props.noOfDecors || 6); i++) {
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
      this.state.logoWidth,
      this.lgDecorColor
    );
  }
  componentDidMount() {
    _defaultAnimations(this.decor, this.toFro, this.duration);
  }
  render() {
    const buttonColor = this.state.switchColor.interpolate({
      inputRange: [0, 150],
      outputRange: [
        this.props.switchButtonColor1 || "rgba(255,0,0,0.5)",
        this.props.switchButtonColor2 || "rgba(125, 24, 242, 0.5)"
      ]
    });

    return (
      <Container
        style={[
          this.props.containerStyle,
          {
            alignItems: "center"
          }
        ]}
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
          lgDecorColor={this.lgDecorColorOutput}
          smDecorColor={this.props.smDecorColor || "#ccc"}
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
  }
}
