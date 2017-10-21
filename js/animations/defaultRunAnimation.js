import _runAnimation from "./runAnimation";
export default function _defaultAnimations(
  decorSm1Y,
  decorSm1X,
  decorSm2Y,
  decorSm2X,
  decorSm3Y,
  decorSm3X,
  decorSm4Y,
  decorSm4X,
  decorLg1Y,
  decorLg1X,
  decorLg2Y,
  decorLg2X
) {
  _runAnimation(decorSm1Y, 10, 3000, 25, 4000, decorSm1X, 5, 1000, 20, 3000);
  _runAnimation(decorSm2Y, 60, 2000, 70, 2000, decorSm2X, -60, 3000, -70, 3000);
  _runAnimation(decorSm3Y, 55, 9000, 45, 1000, decorSm3X, 20, 4000, 10, 1500);
  _runAnimation(decorSm4Y, 65, 2000, 55, 2000, decorSm4X, 40, 3000, 30, 3000);
  _runAnimation(decorLg1Y, 7, 2000, 0, 2000, decorLg1X, 2, 3000, -5, 3000);
  _runAnimation(decorLg2Y, -7, 2000, 0, 2000, decorLg2X, -10, 3000, 4, 3000);
}
