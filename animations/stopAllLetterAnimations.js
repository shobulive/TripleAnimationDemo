import { Animated } from "react-native";
export default function _stopAllLetterAnimations(position) {
  for (let i = 0; i < position.length; i++) {
    Animated.timing(position[i].X).stop();
    Animated.timing(position[i].Y).stop();
  }
}
