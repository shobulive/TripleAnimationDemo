import { Vibration, Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
import _screenShakeAnimation from "./screenShakeAnimation";
export default function _mirrorBreakAnimation(
  _callBackfunction,
  textLetterRotaion
) {
  Vibration.vibrate(1000);
  _smallAnimation(textLetterRotaion, 45, 200).start(() => {
    _callBackfunction();
  });
}
