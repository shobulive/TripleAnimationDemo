import _runAnimation from "./runAnimation";
export default function _defaultAnimations(decor, toFro, duration) {
  for (let i = 0; i < decor.length; i++) {
    _runAnimation(
      decor[i].X,
      toFro[i].X[0],
      duration[i].X[0],
      toFro[i].X[1],
      duration[i].X[1],
      decor[i].Y,
      toFro[i].Y[0],
      duration[i].Y[0],
      toFro[i].Y[1],
      duration[i].Y[1]
    );
  }
}
