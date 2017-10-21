import { Animated } from "react-native";
import _smallComponentAnimation from "./smallAnimation";
export default function _loginTextAnimation(
  L,
  toL,
  durationL,
  O,
  toO,
  durationO,
  G,
  toG,
  durationG,
  I,
  toI,
  durationI,
  N,
  toN,
  durationN
) {
  return Animated.sequence([
    _smallComponentAnimation(L, toL, durationL),
    _smallComponentAnimation(O, toO, durationO),
    _smallComponentAnimation(G, toG, durationG),
    _smallComponentAnimation(I, toI, durationI),
    _smallComponentAnimation(N, toN, durationN)
  ]);
}
