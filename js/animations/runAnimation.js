import { Animated } from "react-native";
import _componentAnimation from "./componentAnimation";
export default function _runAnimation(
  stateValY,
  toY,
  durationYgo,
  fromY,
  durationYreturn,
  stateValX,
  toX,
  durationXgo,
  fromX,
  durationXreturn
) {
  Animated.parallel([
    _componentAnimation(stateValY, toY, durationYgo, fromY, durationYreturn),
    _componentAnimation(stateValX, toX, durationXgo, fromX, durationXreturn)
  ]).start(() =>
    _runAnimation(
      stateValY,
      toY,
      durationYgo,
      fromY,
      durationYreturn,
      stateValX,
      toX,
      durationXgo,
      fromX,
      durationXreturn
    )
  );
}
