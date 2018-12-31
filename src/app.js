/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home"

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});
const AppContainer = createAppContainer(AppNavigator)
AppRegistry.registerComponent(appName, () => AppContainer);