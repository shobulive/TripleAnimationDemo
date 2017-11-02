import { Animated } from "react-native";
import _smallAnimation from "./smallAnimation";
function _textTransitionAnimation(textStateVal, destination, finalCallback) {
  _smallAnimation(textStateVal[0], destination, 80).start(() => {
    if (textStateVal.length > 1)
      _smallAnimation(textStateVal[1], destination, 80).start(() => {
        if (textStateVal.length > 2)
          _smallAnimation(textStateVal[2], destination, 80).start(() => {
            if (textStateVal.length > 3)
              _smallAnimation(textStateVal[3], destination, 80).start(() => {
                if (textStateVal.length > 4)
                  _smallAnimation(
                    textStateVal[4],
                    destination,
                    80
                  ).start(() => {
                    if (textStateVal.length > 5)
                      _smallAnimation(
                        textStateVal[5],
                        destination,
                        80
                      ).start(() => {
                        if (textStateVal.length > 6)
                          _smallAnimation(
                            textStateVal[6],
                            destination,
                            80
                          ).start(() => {
                            if (textStateVal.length > 7)
                              _smallAnimation(
                                textStateVal[7],
                                destination,
                                80
                              ).start(() => {
                                if (textStateVal.length > 8)
                                  _smallAnimation(
                                    textStateVal[8],
                                    destination,
                                    80
                                  ).start(() => {
                                    if (textStateVal.length > 9)
                                      _smallAnimation(
                                        textStateVal[9],
                                        destination,
                                        80
                                      ).start(finalCallback);
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });
}
export default function _switchButtonAnimation(
  show2ndPage,
  switchColor,
  page1TextStateVal,
  page2TextStateVal,
  logoHeight,
  logoTranslateY,
  logoWidth,
  lgDecorColor
) {
  if (show2ndPage) {
    Animated.timing(switchColor, {
      toValue: 150,
      duration: 400
    }).start();
    for (let i = 0; i < lgDecorColor.length; i++) {
      _smallAnimation(lgDecorColor[i], 150, 700).start();
    }
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
    _textTransitionAnimation(
      page1TextStateVal,
      0,
      _textTransitionAnimation(page2TextStateVal, 100, () => {})
    );
  } else {
    Animated.timing(switchColor, {
      toValue: 0,
      duration: 400
    }).start();
    for (let i = 0; i < lgDecorColor.length; i++) {
      _smallAnimation(lgDecorColor[i], 0, 700).start();
    }
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
    _textTransitionAnimation(
      page1TextStateVal,
      100,
      _textTransitionAnimation(page2TextStateVal, 0, () => {})
    );
  }
}
