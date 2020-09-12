import React, {useEffect} from 'react';

import StackNavigator from '../Navigation/MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden={true}></StatusBar>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}
