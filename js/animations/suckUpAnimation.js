import _smallComponentAnimation from "./smallAnimation";
import { Animated } from "react-native";
export default function _suckUpAnimation(
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
    _smallComponentAnimation(widthMainView, 30, 700),
    _smallComponentAnimation(heightMainView, 10, 700),
    _smallComponentAnimation(opacityMainView, 0, 700),
    _smallComponentAnimation(widthLg, 0, 700),
    _smallComponentAnimation(heightLg, 0, 700),
    _smallComponentAnimation(widthSm, 0, 700),
    _smallComponentAnimation(heightSm, 0, 700),
    _smallComponentAnimation(opacityDecor, 0, 700)
  ]);
}
