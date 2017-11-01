import _smallAnimation from "./smallAnimation";
import { Animated, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");
export default function _submitAnimation(
  ButtonWidth,
  ButtonHeight,
  Color,
  // buttonHeightHere,
  CallBack
) {
  _smallAnimation(ButtonWidth, 45, 1000).start(() => {
    setTimeout(() => {
      Animated.parallel([
        _smallAnimation(ButtonHeight, height + 1000, 200),
        _smallAnimation(ButtonWidth, width, 200),
        _smallAnimation(Color, 150, 500)
        // _smallAnimation(buttonHeightHere, 0, 200)
      ]).start(() => {
        CallBack();
      });
    }, 1000);
  });
}
