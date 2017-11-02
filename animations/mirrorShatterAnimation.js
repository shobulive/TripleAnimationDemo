import { Vibration, Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
import _screenShakeAnimation from "./screenShakeAnimation";
import _roationAnimation from "./letterRotationAnimation";
export default function _mirrorShatterAnimation(
  position,
  destination,
  duration,
  callBackFunction,
  textLetterRotation
) {
  Vibration.vibrate(1000);
  _roationAnimation(textLetterRotation);
  let smallAnimationCollection = [];
  for (let i = 0; i < position.length; i++) {
    smallAnimationCollection.push(
      _smallAnimation(position[i].Y, destination[i].Y, duration[i].Y)
    );
    smallAnimationCollection.push(
      _smallAnimation(position[i].X, destination[i].X, duration[i].X)
    );
  }
  Animated.parallel(smallAnimationCollection).start(() => {
    callBackFunction();
  });
}
