import React, {Component} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

class Rounded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberMe: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'skyblue'}}>
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
              marginTop: -hp('30%'),
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
            paddingBottom: hp('2%'),
            marginTop: -hp('30%'),
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
            Sign Up
          </Text>
          <View
            style={{
              marginTop: hp('3%'),
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
              placeholder="First name"></TextInput>
          </View>
          <View
            style={{
              marginTop: hp('1.5%'),
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
              placeholder="Last name"></TextInput>
          </View>
          <View
            style={{
              marginTop: hp('1.5%'),
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
              placeholder="Email"></TextInput>
          </View>
          <View
            style={{
              marginTop: hp('1.5%'),
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
              placeholder="Phone number"></TextInput>
          </View>
          <View
            style={{
              marginTop: hp('1.5%'),
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
              placeholder="Password"></TextInput>
          </View>
          <View
            style={{
              marginTop: hp('1.5%'),
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
              placeholder="Confirm password"></TextInput>
          </View>
          <Pressable
            onPress={() => {
              this.props.navigation.navigate('MainTabs');
            }}>
            <View
              style={{
                marginTop: hp('2%'),
                borderRadius: hp('0.5%'),
                padding: hp('0.5%'),
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: hp('1.2%'),
                backgroundColor: 'orange',
              }}>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('login');
                }}
                style={{fontWeight: 'bold', fontSize: hp('2.2%')}}>
                SIGN UP
              </Text>
            </View>
          </Pressable>
          <View
            style={{
              marginTop: hp('3%'),
              flexDirection: 'row',
              borderRadius: hp('0.5%'),
              padding: hp('0.5%'),
              paddingVertical: hp('1.2%'),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  this.setState({rememberMe: !this.state.rememberMe});
                }}>
                <View
                  style={{
                    backgroundColor:
                      this.state.rememberMe == true ? 'orange' : 'white',
                    borderWidth: 1,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 20,
                    padding: 1,
                    borderRadius: 20,
                    borderColor: 'orange',
                  }}>
                  {this.state.rememberMe == true && (
                    <IconFontAwesome
                      onPress={() => {
                        this.setState({rememberMe: !this.state.rememberMe});
                      }}
                      name="check"
                      size={15}
                      color="white"></IconFontAwesome>
                  )}
                </View>
              </Pressable>
              <Text
                onPress={() => {
                  this.setState({rememberMe: !this.state.rememberMe});
                }}
                style={{
                  fontSize: hp('1.8%'),
                  marginLeft: hp('1.5%'),
                }}>
                I have read and agreee to Privacy.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: hp('1.8%')}}>
            I have an account!
            <Text
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}
              style={{fontWeight: 'bold'}}>
              Sign IN
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Rounded;
