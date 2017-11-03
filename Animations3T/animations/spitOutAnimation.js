import _smallComponentAnimation from "./smallAnimation";
import { Animated, Dimensions } from "react-native";
let { height, width } = Dimensions.get("window");
export default function _spitOutAnimation(
  widthMainView,
  heightMainView,
  opacityMainView,
  dimensionsLg,
  dimensionsSm,
  opacityDecor
) {
  return Animated.parallel([
    _smallComponentAnimation(widthMainView, width, 700),
    _smallComponentAnimation(heightMainView, height, 700),
    _smallComponentAnimation(opacityMainView, 1, 700),
    _smallComponentAnimation(dimensionsLg, 450, 700),
    _smallComponentAnimation(dimensionsSm, 50, 700),
    _smallComponentAnimation(opacityDecor, 0.5, 700)
  ]);
}
