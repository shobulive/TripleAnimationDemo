import _smallComponentAnimation from "./smallAnimation";
import { Animated } from "react-native";
export default function _suckUpAnimation(
  widthMainView,
  heightMainView,
  opacityMainView,
  dimensionsLg,
  dimensionsSm,
  opacityDecor
) {
  return Animated.parallel([
    _smallComponentAnimation(widthMainView, 30, 700),
    _smallComponentAnimation(heightMainView, 10, 700),
    _smallComponentAnimation(opacityMainView, 0, 700),
    _smallComponentAnimation(dimensionsLg, 0, 700),
    _smallComponentAnimation(dimensionsSm, 0, 700),
    _smallComponentAnimation(opacityDecor, 0, 700)
  ]);
}
