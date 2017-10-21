import { Animated } from "react-native";
import _smallComponentAnimation from "./smallAnimation";
export default function _registerTextAnimation(
  R,
  toR,
  durationR,
  E,
  toE,
  durationE,
  RG,
  toRG,
  durationRG,
  RI,
  toRI,
  durationRI,
  S,
  toS,
  durationS,
  T,
  toT,
  durationT,
  RE,
  toRE,
  durationRE,
  RR,
  toRR,
  durationRR
) {
  return Animated.sequence([
    _smallComponentAnimation(R, toR, durationR),
    _smallComponentAnimation(E, toE, durationE),
    _smallComponentAnimation(RG, toRG, durationRG),
    _smallComponentAnimation(RI, toRI, durationRI),
    _smallComponentAnimation(S, toS, durationS),
    _smallComponentAnimation(T, toT, durationT),
    _smallComponentAnimation(RE, toRE, durationRE),
    _smallComponentAnimation(RR, toRR, durationRR)
  ]);
}
