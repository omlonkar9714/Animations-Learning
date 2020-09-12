import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
const Drawer = createDrawerNavigator();
import Home from '../Screens/DrawerModules/Home/Home';
import MyProfile from '../Screens/DrawerModules/MyProfile/MyProfile';
import MyOrders from '../Screens/DrawerModules/MyOrders/MyOrders';
import Setting from '../Screens/DrawerModules/Setting/Setting';
import Contact from '../Screens/DrawerModules/Contact/Contact';
import PaymentMethods from '../Screens/DrawerModules/MyPaymentMethods/PaymentMethods';

import CustomSlider from '../components/DrawerSlider';

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerContent={(props) => <CustomSlider {...props}></CustomSlider>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="MyOrders" component={MyOrders} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="PaymentMethods" component={PaymentMethods} />
    </Drawer.Navigator>
  );
}
