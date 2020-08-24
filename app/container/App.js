import React from 'react';

import StackNavigator from '../navigation/MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}></StatusBar>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}
