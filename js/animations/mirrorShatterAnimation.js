import { Vibration, Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
import _screenShakeAnimation from "./screenShakeAnimation";
import _roationAnimation from "./letterRotationAnimation";
export default function _mirrorShatterAnimation(
  position,
  destination,
  duration,
  callBackFunction,
  mainViewX,
  mainViewY,
  instructionOpacity,
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
  smallAnimationCollection.push(_screenShakeAnimation(mainViewX, mainViewY));
  Animated.parallel(smallAnimationCollection).start(() => {
    callBackFunction();
    _smallAnimation(instructionOpacity, 1, 500).start();
  });
}
