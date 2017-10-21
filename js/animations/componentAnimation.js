import { Animated } from "react-native";
import _smallComponentAnimation from "./smallAnimation";
export default function _componentAnimation(
  stateVal,
  to,
  durationGo,
  from,
  durationReturn
) {
  return Animated.sequence([
    _smallComponentAnimation(stateVal, to, durationGo),
    _smallComponentAnimation(stateVal, from, durationReturn)
  ]);
}
