import React from "react";
import { Animated, Image } from "react-native";
import { View, Button } from "native-base";
export default class FragmentedImage extends React.Component {
  _generateSections() {
    let n = 0;
    let final = [];
    for (let i = 0; i < this.props.noOfVerticalFragments; i++) {
      let temp = [];
      for (let j = 0; j < this.props.noOfHorizontalFragments; j++) {
        temp.push(
          <Animated.View
            style={{
              width: this.props.width / this.props.noOfHorizontalFragments,
              height: this.props.height / this.props.noOfVerticalFragments,
              transform: [
                { translateX: this.props.position[n].X },
                { translateY: this.props.position[n++].Y },
                { rotate: this.props.rotation[j] }
              ],
              overflow: "hidden"
            }}
            key={j}
          >
            <Button
              transparent
              onPress={this.props.onPress}
              style={{ width: this.props.width, height: this.props.height }}
            >
              <Image
                source={this.props.source}
                style={{
                  top:
                    -i * this.props.height / this.props.noOfVerticalFragments,
                  left:
                    -j * this.props.width / this.props.noOfHorizontalFragments,
                  height: this.props.height,
                  width: this.props.width
                }}
                resizeMethod="auto"
                resizeMode="cover"
                key={j + " "}
              />
            </Button>
          </Animated.View>
        );
      }
      final.push(
        <View style={{ flexDirection: "row" }} key={i}>
          {temp}
        </View>
      );
    }
    return final;
  }
  render() {
    return (
      <View style={{ flexDirection: "column" }}>
        {this._generateSections()}
      </View>
    );
  }
}
