import React from 'react';
import {View, Text, StyleSheet, Image, ToastAndroid} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Gradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function GradientHeader(props) {
  return (
    <View
      style={{
        height: hp('10%'),
        backgroundColor: 'orange',
        width: wp('100%'),
        padding: hp('1.5%'),
        paddingHorizontal: hp('2%'),
        justifyContent: 'center',
      }}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <FontAwesome
          onPress={() => {
            // ToastAndroid.show('Opening Drawer', ToastAndroid.SHORT);
            props.navigation.openDrawer();
          }}
          size={hp('3.5%')}
          name="bars"
          color="white"></FontAwesome>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://2syt8l41furv2dqan6123ah0-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/amazon-banner.png',
            }}
            style={{height: '100%', aspectRatio: 2}}></Image>
        </View>
        <View>
          <FontAwesome
            onPress={() => {
              ToastAndroid.show('Opening Cart', ToastAndroid.SHORT);
            }}
            size={hp('3.5%')}
            name="shopping-bag"
            color="white"></FontAwesome>
          <View
            style={{
              position: 'absolute',
              bottom: -hp('2%'),
              right: hp('-1%'),
              height: hp('2.5%'),
              width: hp('2.5%'),
              borderRadius: hp('5%'),
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              padding: hp('0.1'),
            }}>
            <Text style={{color: 'white', fontSize: hp('1.5%')}}>{10}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
