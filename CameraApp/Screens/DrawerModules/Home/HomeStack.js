import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
const Stack = createStackNavigator();
import Home from './Home';

// ScheduleReminder;

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
