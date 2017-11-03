import _smallAnimation from "./smallAnimation";
import _suckUpAnimation from "./suckUpAnimation";
import _spitOutAnimation from "./spitOutAnimation";
export default function _switchPageAnimation(
  setDisabledTrue,
  widthMainView,
  heightMainView,
  opacityMainView,
  dimensionsLg,
  dimensionsSm,
  opacityDecor,
  buttonHeight,
  setDisabledFalseAndRegToogle
) {
  setDisabledTrue();
  _smallAnimation(buttonHeight, 70, 400).start(
    _suckUpAnimation(
      widthMainView,
      heightMainView,
      opacityMainView,
      dimensionsLg,
      dimensionsSm,
      opacityDecor
    ).start(() => {
      _smallAnimation(buttonHeight, 50, 400).start();
      setDisabledFalseAndRegToogle();
      _spitOutAnimation(
        widthMainView,
        heightMainView,
        opacityMainView,
        dimensionsLg,
        dimensionsSm,
        opacityDecor
      ).start();
    })
  );
}
