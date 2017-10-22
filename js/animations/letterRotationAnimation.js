import { Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
export default function _roationAnimation(textLetterRotation) {
  Animated.sequence([
    _smallAnimation(textLetterRotation, 360, 200),
    _smallAnimation(textLetterRotation, 0, 200)
  ]).start();
}
