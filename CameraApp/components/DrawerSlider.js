import React from 'react';
import {View, Text, Pressable, Image, ToastAndroid} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {CommonActions} from '@react-navigation/native';

const Titles = [
  {name: 'Home', icon: 'home'},
  {name: 'MyProfile', icon: 'user'},
  {name: 'MyOrders', icon: 'truck'},
  {name: 'Setting', icon: 'cog'},
  {name: 'Contact', icon: 'comment'},
  {name: 'PaymentMethods', icon: 'usd'},
];

export default function DrawerSlider(props) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: hp('2%'),
          backgroundColor: 'orange',
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: hp('4%'),
            height: hp('8%'),
            width: hp('8%'),
            overflow: 'hidden',
            backgroundColor: 'white',
          }}>
          <Image
            style={{flex: 1}}
            source={{
              uri:
                'https://media.istockphoto.com/photos/fractal-fire-aries-picture-id880505574?k=6&m=880505574&s=612x612&w=0&h=TCPN9FoWYlFeqG7WYRY29j0P5lLBUHB1eI4fs5eeCrE=',
            }}></Image>
        </View>
        <View style={{marginLeft: hp('1.5%'), justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: hp('2%')}}>
            Omkar Lonkar
          </Text>
          <Text style={{fontSize: hp('1.5%')}}>omkarlonkar@gmail.com</Text>
        </View>
      </View>
      <View style={{flex: 1, padding: hp('2%')}}>
        {Titles.map((item) => {
          return (
            <Pressable
              onPress={() => {
                props.navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: item.name}],
                  }),
                );
              }}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  marginVertical: hp('0.5%'),
                  paddingVertical: hp('1%'),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: hp('2.5%'),
                    width: hp('2.5%'),
                  }}>
                  <FontAwesomeIcon
                    name={item.icon}
                    color="orange"
                    size={hp('2.5%')}></FontAwesomeIcon>
                </View>

                <Text
                  style={{
                    fontSize: hp('1.7%'),
                    fontWeight: 'bold',
                    marginLeft: hp('2%'),
                  }}>
                  {item.name}
                </Text>
              </View>
            </Pressable>
          );
        })}
        <Pressable
          onPress={() => {
            ToastAndroid.show('Logging out', ToastAndroid.SHORT);
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: 'white',
              marginVertical: hp('0.5%'),
              paddingVertical: hp('1%'),
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: hp('2.5%'),
                width: hp('2.5%'),
              }}>
              <FontAwesomeIcon
                name="sign-out"
                color="orange"
                size={hp('2.5%')}></FontAwesomeIcon>
            </View>

            <Text
              style={{
                fontSize: hp('1.7%'),
                fontWeight: 'bold',
                marginLeft: hp('2%'),
              }}>
              Sign out
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            ToastAndroid.show('Terms & Conditions', ToastAndroid.SHORT);
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              marginVertical: hp('0.5%'),
              paddingVertical: hp('1%'),
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: '#ccc',
                fontSize: hp('1.7%'),
              }}>
              Terms & Conditions
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            ToastAndroid.show('Privacy Policy', ToastAndroid.SHORT);
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: 'white',
              marginVertical: hp('0.5%'),
              paddingVertical: hp('1%'),
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: '#ccc',
                fontSize: hp('1.7%'),
              }}>
              Privacy Policy
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            ToastAndroid.show('Faq & Support', ToastAndroid.SHORT);
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: 'white',
              marginVertical: hp('0.5%'),
              paddingVertical: hp('1%'),
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: '#ccc',
                fontSize: hp('1.7%'),
              }}>
              Faq & Support
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
