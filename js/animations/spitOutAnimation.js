import _smallComponentAnimation from "./smallAnimation";
import { Animated, Dimensions } from "react-native";
let { height, width } = Dimensions.get("window");
export default function _spitOutAnimation(
  widthMainView,
  heightMainView,
  opacityMainView,
  widthLg,
  heightLg,
  widthSm,
  heightSm,
  opacityDecor
) {
  return Animated.parallel([
    _smallComponentAnimation(widthMainView, width, 700),
    _smallComponentAnimation(heightMainView, height, 700),
    _smallComponentAnimation(opacityMainView, 1, 700),
    _smallComponentAnimation(widthLg, 450, 700),
    _smallComponentAnimation(heightLg, 450, 700),
    _smallComponentAnimation(widthSm, 50, 700),
    _smallComponentAnimation(heightSm, 50, 700),
    _smallComponentAnimation(opacityDecor, 0.5, 700)
  ]);
}
