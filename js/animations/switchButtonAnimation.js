import { Animated } from "react-native";
import _registerTextAnimation from "./registerTextAnimation";
import _loginTextAnimation from "./loginTextAnimation";
export default function _switchButtonAnimation(
  showRegistrationPage,
  switchColor,
  positionL,
  positionO,
  positionG,
  positionI,
  positionN,
  positionR,
  positionE,
  positionRG,
  positionRI,
  positionS,
  positionT,
  positionRE,
  positionRR,
  logoHeight,
  logoTranslateY,
  logoWidth
) {
  if (showRegistrationPage) {
    Animated.timing(switchColor, {
      toValue: 150,
      duration: 400
    }).start();
    Animated.parallel([
      Animated.timing(logoHeight, {
        toValue: 146,
        duration: 700
      }),
      Animated.timing(logoWidth, {
        toValue: 130,
        duration: 700
      }),
      ,
      Animated.timing(logoTranslateY, {
        toValue: 30,
        duration: 700
      })
    ]).start();
    _loginTextAnimation(
      positionL,
      0,
      80,
      positionO,
      0,
      80,
      positionG,
      0,
      80,
      positionI,
      0,
      80,
      positionN,
      0,
      80
    ).start();
    _registerTextAnimation(
      positionR,
      100,
      80,
      positionE,
      100,
      80,
      positionRG,
      100,
      80,
      positionRI,
      100,
      80,
      positionS,
      100,
      80,
      positionT,
      100,
      80,
      positionRE,
      100,
      80,
      positionRR,
      100,
      80
    ).start();
  } else {
    Animated.timing(switchColor, {
      toValue: 0,
      duration: 400
    }).start();
    Animated.parallel([
      Animated.timing(logoHeight, {
        toValue: 215,
        duration: 700
      }),
      Animated.timing(logoWidth, {
        toValue: 200,
        duration: 700
      }),
      ,
      Animated.timing(logoTranslateY, {
        toValue: 100,
        duration: 700
      })
    ]).start();
    _loginTextAnimation(
      positionL,
      100,
      80,
      positionO,
      100,
      80,
      positionG,
      100,
      80,
      positionI,
      100,
      80,
      positionN,
      100,
      80
    ).start();
    _registerTextAnimation(
      positionR,
      0,
      80,
      positionE,
      0,
      80,
      positionRG,
      0,
      80,
      positionRI,
      0,
      80,
      positionS,
      0,
      80,
      positionT,
      0,
      80,
      positionRE,
      0,
      80,
      positionRR,
      0,
      80
    ).start();
  }
}
