import { Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
export default function _screenShakeAnimation(mainViewX, mainViewY) {
  return Animated.sequence([
    _smallAnimation(mainViewX, 10, 10),
    _smallAnimation(mainViewX, 0, 10),
    _smallAnimation(mainViewX, -10, 10),
    _smallAnimation(mainViewX, 0, 10),
    _smallAnimation(mainViewY, 10, 10),
    _smallAnimation(mainViewY, 0, 10),
    _smallAnimation(mainViewY, -10, 10),
    _smallAnimation(mainViewY, 0, 10)
  ]);
}
