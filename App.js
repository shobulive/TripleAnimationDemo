import React from "react";
import Main from "./js/screens/Main";
import { StackNavigator } from "react-navigation";
import Welcome from "./js/screens/Welcome";
const NavigationDetails = StackNavigator(
  {
    Main: { screen: Main },
    Welcome: { screen: Welcome }
  },
  { initialRouteName: "Main", headerMode: "none" }
);
export default NavigationDetails;
