import React from "react";
import Main from "./screens/Main";
import { StackNavigator } from "react-navigation";
import Welcome from "./screens/Welcome";
const Demo = StackNavigator(
  {
    Main: { screen: Main },
    Welcome: { screen: Welcome }
  },
  { initialRouteName: "Main", headerMode: "none" }
);
export default Demo;
