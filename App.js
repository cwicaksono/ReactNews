import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from './src/Splash.js'
import HomeScreen from './src/Home.js'
import DetailScreen from './src/Detail.js'

const App = createStackNavigator({
  Splash: {
    screen: SplashScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
});

export default createAppContainer(App);