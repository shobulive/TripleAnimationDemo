import { Vibration, Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
export default function _mirrorBreakAnimation(
  _callBackfunction,
  textLetterRotaion,
  instructionOpacity,
  mainViewX,
  mainViewY
) {
  Vibration.vibrate(1000);
  Animated.parallel([
    _smallAnimation(textLetterRotaion, 45, 200),
    _smallAnimation(instructionOpacity, 0, 500),
    Animated.sequence([
      _smallAnimation(mainViewX, 10, 10),
      _smallAnimation(mainViewX, 0, 10),
      _smallAnimation(mainViewX, -10, 10),
      _smallAnimation(mainViewX, 0, 10),
      _smallAnimation(mainViewY, 10, 10),
      _smallAnimation(mainViewY, 0, 10),
      _smallAnimation(mainViewY, -10, 10),
      _smallAnimation(mainViewY, 0, 10)
    ])
  ]).start(() => {
    _callBackfunction();
    _smallAnimation(instructionOpacity, 1, 500).start();
  });
}
