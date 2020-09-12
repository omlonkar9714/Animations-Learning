import {createStackNavigator} from '@react-navigation/stack';
import {fromLeft} from 'react-navigation-transitions';
import React from 'react';
const Stack = createStackNavigator();
import List from '../screens/List';
import ProgressBar from '../screens/ProgressBar';
import TranslateY from '../screens/TranslateY';
import Loader from '../screens/Loader';
import Scale from '../screens/Scale';
import RadioButton from '../screens/RadioButton';
import Waveheader from '../screens/Waveheader';
import SvgHeader from '../screens/svgheader';
import SvgImg from '../screens/SvgImg';
import CircularAnimationgImg from '../screens/CircularAnimation';
import Download from '../screens/Download';
import AddToCart from '../screens/AddToCart';
import Rounded from '../screens/Rounded';
import Rounded2 from '../screens/Rounded2';
import FastImage from '../screens/FastImage';

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="List" headerMode={'none'}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="ProgressBar" component={ProgressBar} />
      <Stack.Screen name="TranslateY" component={TranslateY} />
      <Stack.Screen name="Scale" component={Scale} />
      <Stack.Screen name="Loader" component={Loader} />
      <Stack.Screen name="RadioButton" component={RadioButton} />
      <Stack.Screen name="Waveheader" component={Waveheader} />
      <Stack.Screen name="SvgHeader" component={SvgHeader} />
      <Stack.Screen name="SvgImg" component={SvgImg} />
      <Stack.Screen name="Download" component={Download} />
      <Stack.Screen name="AddToCart" component={AddToCart} />
      <Stack.Screen name="Rounded" component={Rounded} />
      <Stack.Screen name="Rounded2" component={Rounded2} />
      <Stack.Screen name="FastImage" component={FastImage} />
      <Stack.Screen
        name="CircularAnimationgImg"
        component={CircularAnimationgImg}
      />
    </Stack.Navigator>
  );
}
