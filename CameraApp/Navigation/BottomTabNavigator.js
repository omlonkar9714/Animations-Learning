import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Home from '../Screens/HomeTabStacks/Home/Home';
import Fav from '../Screens/HomeTabStacks/Fav/Fav';
import History from '../Screens/HomeTabStacks/History/History';
import Profile from '../Screens/HomeTabStacks/Profile/Profile';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator activeColor="white" inactiveColor="#3e2465">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={hp('3.1%')}
            />
          ),
          tabBarColor: 'orange',
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bell"
              color={color}
              size={hp('3.1%')}
            />
          ),
          tabBarColor: 'purple',
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={hp('3.1%')}
            />
          ),
          tabBarColor: '#e91e63',
        }}
      />

      <Tab.Screen
        name="Music"
        component={Profile}
        options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="music"
              color={color}
              size={hp('3.1%')}
            />
          ),
          tabBarColor: '#D35400',
        }}
      />
    </Tab.Navigator>
  );
}
