import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

class Rounded extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'orange',
            height: hp('45%'),
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: hp('5%'),
            borderBottomRightRadius: hp('5%'),
          }}>
          <View
            style={{
              marginTop: -hp('20%'),
              alignSelf: 'center',
              height: hp('20%'),
              width: hp('25%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                flex: 1,
                borderRadius: hp('2%'),
                aspectRatio: hp('0.15%'),
                resizeMode: 'contain',
              }}
              source={{
                uri:
                  'https://2syt8l41furv2dqan6123ah0-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/amazon-banner.png',
              }}></Image>
          </View>
        </View>
        <View
          style={{
            padding: hp('2%'),
            paddingBottom: hp('4%'),
            marginTop: -hp('20%'),
            elevation: hp('0.5%'),
            backgroundColor: 'white',
            // height: 500,
            borderRadius: hp('2%'),
            marginHorizontal: hp('1.5%'),
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: hp('2.5%'),
              marginTop: hp('2%'),
            }}>
            Sign in to continue
          </Text>
          <View
            style={{
              marginTop: hp('5%'),
              borderRadius: hp('0.5%'),
              borderWidth: hp('0.1%'),
              padding: hp('0.5%'),
              borderColor: '#e7e7e7',
            }}>
            <TextInput
              style={{
                marginLeft: hp('1%'),
                fontSize: hp('1.8%'),
                color: 'orange',
              }}
              placeholder="Email adddress"></TextInput>
          </View>
          <View
            style={{
              marginTop: hp('2%'),
              borderRadius: hp('0.5%'),
              borderWidth: hp('0.1%'),
              padding: hp('0.5%'),
              borderColor: '#e7e7e7',
            }}>
            <TextInput
              style={{
                marginLeft: hp('1%'),
                fontSize: hp('1.8%'),
                color: 'orange',
              }}
              placeholder="Enter password"></TextInput>
          </View>
          <View
            style={{
              marginTop: hp('3%'),
              borderRadius: hp('0.5%'),
              padding: hp('0.5%'),
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: hp('1.2%'),
              backgroundColor: 'orange',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: hp('2.2%')}}>
              SIGN IN
            </Text>
          </View>
          <View
            style={{
              marginTop: hp('3%'),
              flexDirection: 'row',
              borderRadius: hp('0.5%'),
              padding: hp('0.5%'),
              paddingVertical: hp('1.2%'),
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: hp('2.5%'),
                  width: hp('2.5%'),
                  borderRadius: hp('1.25%'),
                  backgroundColor: 'orange',
                }}></View>
              <Text
                style={{
                  fontSize: hp('1.8%'),
                  marginLeft: hp('1.5%'),
                }}>
                Remember me
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: hp('1.8%')}}>Forgot password?</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: hp('3%'),
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginHorizontal: hp('2%'),
              height: hp('6%'),
              justifyContent: 'center',
              alignItems: 'center',
              width: hp('6%'),
              backgroundColor: 'blue',
              borderRadius: hp('2.5%'),
              overflow: 'hidden',
            }}>
            <Image
              style={{flex: 1, aspectRatio: 1.5, resizeMode: 'contain'}}
              source={{
                uri:
                  'https://icons-for-free.com/iconfiles/png/512/facebook+high+quality+media+social+social+media+square+icon-1320192615308993674.png',
              }}></Image>
          </View>
          <View
            style={{
              marginHorizontal: hp('2%'),
              height: hp('6%'),
              width: hp('6%'),
              backgroundColor: 'skyblue',
              borderRadius: hp('2.5%'),
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <Image
              style={{flex: 1, aspectRatio: 1.5, resizeMode: 'contain'}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScEc377HOd1RdpPLCEyWvI7aHGL5ZIKz1Thw&usqp=CAU',
              }}></Image>
          </View>
          <View
            style={{
              marginHorizontal: hp('2%'),
              height: hp('6%'),
              width: hp('6%'),
              backgroundColor: 'skyblue',
              borderRadius: hp('2.5%'),
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <Image
              style={{flex: 1, aspectRatio: 1.5, resizeMode: 'contain'}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZEweU2Jch2FfnjCNMeaUuUiCkOtvVc9ihCg&usqp=CAU',
              }}></Image>
          </View>
        </View>
        <View
          style={{
            marginTop: hp('5%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: hp('1.8%')}}>
            Don't have an account?
            <Text
              onPress={() => {
                this.props.navigation.navigate('Rounded2');
              }}
              style={{fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Rounded;
