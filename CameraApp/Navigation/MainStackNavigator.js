import {createStackNavigator} from '@react-navigation/stack';
import {fromLeft} from 'react-navigation-transitions';
import React from 'react';
const Stack = createStackNavigator();
import Login from '../Screens/Login/Login';
import Signup from '../Screens/SignUp/Signup';
import MainTabs from '../Navigation/BottomTabNavigator';
import Test from '../Screens/LocalNotification';
import FirebaseNotification from '../Screens/ScheduleNotification/ScheduleNotification';
import ScheduleReminder from '../Screens/ScheduleTrue/ScheduleReminder';

// ScheduleReminder;

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="ScheduleReminder" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen
        name="FirebaseNotification"
        component={FirebaseNotification}
      />
      <Stack.Screen name="ScheduleReminder" component={ScheduleReminder} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}
