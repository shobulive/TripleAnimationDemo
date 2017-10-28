import { Vibration, Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
import _screenShakeAnimation from "./screenShakeAnimation";
export default function _mirrorBreakAnimation(
  _callBackfunction,
  textLetterRotaion,
  instructionOpacity,
  mainViewX,
  mainViewY
) {
  _screenShakeAnimation(mainViewX, mainViewY).start(() => {
    Vibration.vibrate(1000);
    Animated.parallel([
      _smallAnimation(textLetterRotaion, 45, 200),
      _smallAnimation(instructionOpacity, 0, 500)
    ]).start(() => {
      _callBackfunction();
      _smallAnimation(instructionOpacity, 1, 500).start();
    });
  });
}
