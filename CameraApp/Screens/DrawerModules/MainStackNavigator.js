import {createStackNavigator} from '@react-navigation/stack';
import {fromLeft} from 'react-navigation-transitions';
import React from 'react';
const Stack = createStackNavigator();

import Home from '../DrawerModules/Home/Home';
import MyProfile from '../DrawerModules/MyProfile/MyProfile';
import MyOrders from '../DrawerModules//MyOrders/MyOrders';
import Setting from '../DrawerModules/Setting/Setting';
import Contact from '../DrawerModules/Contact/Contact';
import PaymentMethods from '../DrawerModules/MyPaymentMethods/PaymentMethods';
import TermsAndConditions from '../DrawerModules/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../DrawerModules/PrivacyPolicy/PrivacyPolicy';
import Faq from '../DrawerModules/FaqSupport/FaqAndSupport';

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Faq" component={Faq} />
    </Stack.Navigator>
  );
}
