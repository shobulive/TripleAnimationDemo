import _smallAnimation from "./smallAnimation";
export default function _dramaticAppearanceAnimation(
  welcomeOpacity,
  geekOpacity,
  instructionOpacity
) {
  _smallAnimation(welcomeOpacity, 1, 1000).start(() => {
    _smallAnimation(geekOpacity, 1, 1000).start(() =>
      _smallAnimation(instructionOpacity, 1, 1000).start()
    );
  });
}
