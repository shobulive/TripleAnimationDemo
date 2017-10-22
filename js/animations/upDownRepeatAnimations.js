import { Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
export default function _upDownRepeatAnimation(instructionY) {
  Animated.sequence([
    _smallAnimation(instructionY, 20, 500),
    _smallAnimation(instructionY, 0, 200)
  ]).start(() => _upDownRepeatAnimation(instructionY));
}
