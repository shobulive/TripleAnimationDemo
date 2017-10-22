import { Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
export default function _componentAnimation(
  stateVal,
  to,
  durationGo,
  from,
  durationReturn
) {
  return Animated.sequence([
    _smallAnimation(stateVal, to, durationGo),
    _smallAnimation(stateVal, from, durationReturn)
  ]);
}
